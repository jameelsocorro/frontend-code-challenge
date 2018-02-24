import { renderComponent, expect } from '../utils/test-util';
import App from './app';

describe('App', () => {
	let component;

	beforeEach(() => {
		const props = { renderAsTest: true };
		component = renderComponent(App, props);
	});

	it('shows a list of properties', () => {
		expect(component.find('[name="properties"]')).to.exist;
	});

});
