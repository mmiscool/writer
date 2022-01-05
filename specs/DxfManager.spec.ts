import DxfManager from '../src/DxfManager';

jest.mock('../src/DxfManager');

describe('DxfManager class', () => {
	const d = new DxfManager();

	it('Should call handle constructor one time', () => {
		expect(DxfManager).toHaveBeenCalledTimes(1);
	});
});
