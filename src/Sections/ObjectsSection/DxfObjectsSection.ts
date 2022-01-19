import DxfDictionary from './Objects/DxfDictionary';
import DxfObject from './DxfObject';
import TagsManager from '../../Internals/TagsManager';
import DxfInterface from '../../Internals/Interfaces/DxfInterface';

export default class DxfObjects implements DxfInterface {
	static #instance: DxfObjects;
	rootDictionary: DxfDictionary = new DxfDictionary();

	objects: DxfObject[] = [];

	private constructor() {
		this.rootDictionary.duplicateRecordCloningFlag = 1;
		const dic = this.addDictionary();

		this.rootDictionary.addEntryObject('ACAD_GROUP', dic.handle);
	}

	public static getInstance(): DxfObjects {
		if (!this.#instance) this.#instance = new DxfObjects();
		return this.#instance;
	}

	public addObject<T extends DxfObject>(object: T): T {
		this.objects.push(object);
		return object;
	}

	public addDictionary(): DxfDictionary {
		const dictionary = new DxfDictionary();
		dictionary.softPointer = this.rootDictionary.handle;
		this.addObject(dictionary);
		return dictionary;
	}

	public addEntryToRootDictionary(name: string, softOwner: string): void {
		this.rootDictionary.addEntryObject(name, softOwner);
	}

	public get manager(): TagsManager {
		const manager = new TagsManager();
		manager.sectionBegin('OBJECTS');
		manager.appendTags(this.rootDictionary);
		this.objects.forEach((object) => {
			manager.appendTags(object);
		});
		manager.sectionEnd();
		manager.entityType('EOF');
		return manager;
	}

	public stringify(): string {
		return this.manager.stringify();
	}
}
