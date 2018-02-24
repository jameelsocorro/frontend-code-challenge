import { expect, mockStore } from '../../../utils/test-util';
import { FETCH_PROPERTIES } from '../../constants';
import { fetchProperties, fetchPropertiesOnSuccess } from './property';

describe('Property Action', () => {
    describe('fetchProperties', () => {
        it('has the correct type and payload', () => {
            const store = mockStore({})
            const expected = [{type: FETCH_PROPERTIES, payload: ['property1']}]
            store.dispatch(fetchPropertiesOnSuccess(['property1']))
            expect(store.getActions()).to.deep.equal(expected)
        })
    });
});
