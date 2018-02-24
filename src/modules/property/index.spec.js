import { renderComponentWithStore, expect } from '../../../utils/test-util';
import PropertyModule from './index';

describe('Property Module', () => {
	let component;

	beforeEach(() => {
		const props = { renderAsTest: true };
		component = renderComponentWithStore(PropertyModule, props);
	});

	it('shows a list of properties', () => {
		expect(component.attr('name')).to.equal('properties');
	});

});
