import { combineReducers } from 'redux';
import propertyReducer from './property/property';

const rootReducer = combineReducers({
    property: propertyReducer,
});

export default rootReducer;
