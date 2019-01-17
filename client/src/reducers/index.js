import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import StreamReducer from './streamsReducer';

import {reducer as formReducer} from "redux-form";

export default combineReducers( {
    auth: AuthReducer,
    form: formReducer,
    streams: StreamReducer
});