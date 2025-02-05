import Entity, { CommonEntityOptions } from '../Entity';
import { BoundingBox, boundingBox_t } from 'Internals/BoundingBox';
import { Dxfier } from 'Internals/Dxfier';
import { vec3_t } from 'Internals/Helpers';

export class Ellipse extends Entity {
	center: vec3_t;
	endPointOfMajorAxis: vec3_t;
	ratioOfMinorAxisToMajorAxis: number;
	startParameter: number;
	endParameter: number;

	constructor(
		center: vec3_t,
		endPointOfMajorAxis: vec3_t,
		ratioOfMinorAxisToMajorAxis: number,
		startParameter: number,
		endParameter: number,
		options?: CommonEntityOptions
	) {
		super('ELLIPSE', 'AcDbEllipse', options);
		this.center = center;
		this.endPointOfMajorAxis = endPointOfMajorAxis;
		this.ratioOfMinorAxisToMajorAxis = ratioOfMinorAxisToMajorAxis;
		this.startParameter = startParameter;
		this.endParameter = endParameter;
	}

	override boundingBox(): boundingBox_t {
		const x = this.center.x;
		const y = this.center.y;
		const xEndPointOfMajorAxis = this.endPointOfMajorAxis.x;
		const yEndPointOfMajorAxis = this.endPointOfMajorAxis.y;

		const bigRadius = Math.sqrt(
			Math.pow(x - (x + xEndPointOfMajorAxis), 2) +
				Math.pow(y - (y + yEndPointOfMajorAxis), 2)
		);
		return BoundingBox.centerRadiusBBox(this.center, bigRadius);
	}

	override dxfy(dx: Dxfier): void {
		super.dxfy(dx);
		dx.point3d(this.center);
		dx.push(11, this.endPointOfMajorAxis.x);
		dx.push(21, this.endPointOfMajorAxis.y);
		dx.push(31, this.endPointOfMajorAxis.z);
		dx.push(40, this.ratioOfMinorAxisToMajorAxis);
		dx.push(41, this.startParameter);
		dx.push(42, this.endParameter);
	}
}
