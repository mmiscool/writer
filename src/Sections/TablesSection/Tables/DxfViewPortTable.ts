import DxfTable from '../DxfTable';
import DxfViewPort from './Records/DxfViewPort';
import TagsManager from '../../../Internals/TagsManager';

export default class DxfViewPortTable extends DxfTable {
	private static _instance: DxfViewPortTable;
	private readonly _viewPortRecords: DxfViewPort[] = [];

	public get viewPortRecords(): DxfViewPort[] {
		return this._viewPortRecords;
	}

	private constructor() {
		super('VPORT');
	}

	public static getInstance(): DxfViewPortTable {
		if (!this._instance) this._instance = new DxfViewPortTable();
		return this._instance;
	}

	public addViewPort(name: string) {
		const viewPortRecord = new DxfViewPort(name);
		viewPortRecord.softPointer = this.handle;
		this._viewPortRecords.push(viewPortRecord);
		return viewPortRecord;
	}

	public get manager(): TagsManager {
		const manager = new TagsManager();
		this.maxNumberEntries = this.viewPortRecords.length;
		manager.pushTags(super.manager.tags);
		this.viewPortRecords.forEach((viewPortRecord) => {
			manager.appendTags(viewPortRecord);
		});
		manager.entityType('ENDTAB');
		return manager;
	}
}