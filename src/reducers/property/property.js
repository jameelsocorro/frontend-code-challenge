import { FETCH_PROPERTIES } from '../../constants';

const INITIAL_STATE = {
    properties: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_PROPERTIES:
            return Object.assign({}, state, {
                properties: action.payload
            });
        default:
            return state;
    };

    return state;
};
