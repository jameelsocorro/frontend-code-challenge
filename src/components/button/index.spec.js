import { renderComponent, expect } from '../../../utils/test-util';
import {Button} from './index';

describe('Button Component', () => {
    let component;

    beforeEach(() => {
        const props = { title: 'Button Title' }
        component = renderComponent(Button, props);
    });

    it('it displays title', () => {
        expect(component.text()).to.contain('Button Title');
    });

});
