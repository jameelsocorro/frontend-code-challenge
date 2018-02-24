import { renderComponent, expect } from '../../../utils/test-util';
import { Spinner } from './index';

describe('Spinner Component', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(Spinner);
	});

	it('shows spinner', () => {
		expect(component.attr('name')).to.equal('spinner');
	});

});
