import { createStore, compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState,
        compose(applyMiddleware(thunk))
    );
}
