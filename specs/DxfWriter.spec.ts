import { describe, expect, it } from 'vitest';
import { LWPolylineFlags, LWPolylineVertex, point2d, point3d } from '../src';
import { DxfWriter } from 'DxfWriter';

describe('DxfWriter', () => {
	it('should cover all code source', () => {
		const dxf = new DxfWriter();
		dxf.addPoint(0, 0, 0);
		const vertices: LWPolylineVertex[] = [
			{
				point: point2d(0, 0),
				startingWidth: 5,
				endWidth: 2,
			},
			{
				point: point2d(100, 100),
			},
			{
				point: point2d(100, 200),
			},
			{
				point: point2d(0, 300),
			},
		];

		dxf.addLWPolyline(vertices, {
			flags: LWPolylineFlags.Closed,
		});
		dxf.addLine(point3d(0, 0, 0), point3d(100, 100, 0));

		dxf.addLType('AXES', '____ _ ', [4, -1, 1, -1]);

		dxf.addRectangle(point2d(400, 400), point2d(600, 200), {
			elevation: 30,
			constantWidth: 10,
			lineType: 'AXES',
			lineTypeScale: 10,
			visible: true,
		});

		dxf.addRectangle(point2d(400, 400), point2d(600, 200), {
			fillet: 50,
			visible: false,
		});

		const circleBlock = dxf.addBlock('circle');
		circleBlock.addCircle(point3d(0, 0, 0), 50);
		circleBlock.addRectangle(point2d(-35.3553, 35.3553), point2d(35.3553, -35.3553));

		dxf.addInsert(circleBlock.name, point3d(0, 0, 0));

		const controlPoints = [
			point3d(0, 0, 0),
			point3d(10, 10, 0),
			point3d(20, 10, 0),
			point3d(30, 20, 0),
		];

		dxf.addSpline({
			controlPoints,
			fitPoints: controlPoints,
		});

		dxf.addArc(point3d(0, 0, 0), 10, 0, 45);

		dxf.addEllipse(point3d(100, 100, 0), point3d(50, 0, 0), 0.5, 0, 2 * Math.PI);

		const face = dxf.add3dFace(
			point3d(0, 0, 50),
			point3d(0, 100, 50),
			point3d(100, 100, 50),
			point3d(100, 0, 50)
		);
		face.setEdgesVisible(true);
		face.setFirstEdgeVisible(false);
		face.setSecondEdgeVisible(true);
		face.setSecondEdgeVisible(false);
		face.setThirdEdgeVisible(false);
		face.setFourthEdgeVisible(false);
		face.setEdgesVisible(false);

		dxf.addCircle(point3d(0, 0, 0), 50);

		dxf.addPolyline3D([
			{ point: point3d(0, 0, 0) },
			{ point: point3d(50, 40, 0) },
			{ point: point3d(70, 63, 2) },
		]);

		dxf.addImage(
			'.\\test - image.png',
			'test - image',
			point3d(700, 600, 0),
			1792,
			1280,
			433.54,
			360 - 359.74
		);

		dxf.tables.addView({
			name: 'testview',
			backClipping: 0,
			frontClipping: 0,
			isUCSAssociated: false,
			lensLength: 50.0,
			renderMode: 0,
			targetPoint: point3d(0, 0, 0),
			twistAngle: 0,
			viewCenter: point2d(40.36, 15.86),
			viewDirection: point3d(0, 0, 1),
			viewHeight: 17.91,
			viewMode: 0,
			viewWidth: 20.01,
		});

		dxf.addText(point3d(0, 0, 0), 5, 'test');

		expect(dxf.stringify()).toMatchSnapshot();
	});
});
