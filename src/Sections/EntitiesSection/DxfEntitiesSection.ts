import { Dxfier } from 'Internals/Dxfier';
import DxfInterface from 'Internals/Interfaces/DxfInterface';
import { DxfBlock } from '../BlocksSection/DxfBlock';

export default class DxfEntitiesSection implements DxfInterface {
	readonly modelSpace: DxfBlock;

	constructor(modelSpace: DxfBlock) {
		this.modelSpace = modelSpace;
	}

	setLayerName(layerName: string) {
		this.modelSpace.setLayerName(layerName);
	}

	dxfy(dx: Dxfier) {
		dx.start('ENTITIES');
		this.modelSpace.entities.forEach((e) => e.dxfy(dx));
		dx.end();
	}
}
