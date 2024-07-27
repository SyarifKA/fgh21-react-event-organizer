import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import profile from './profile';
import event from './event';

const reducer = combineReducers({
    auth,
    event,
    profile,
});

export default reducer;