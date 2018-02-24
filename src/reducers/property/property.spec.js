import { expect } from '../../../utils/test-util';
import { FETCH_PROPERTIES } from '../../constants';
import propertyReducer from './property';

describe('Property Reducer', () => {
    it('handles action with unknown type', () => {
        expect(propertyReducer(undefined, {})).to.eql({ properties: [] });
    });

    describe('fetchProperties', () => {
        it('handles action of type FETCH_PROPERTIES', () => {
            const action = { type: FETCH_PROPERTIES, payload: ['property1'] };
            expect(propertyReducer([], action)).to.eql({ properties: ['property1'] });
        });
    })
});
