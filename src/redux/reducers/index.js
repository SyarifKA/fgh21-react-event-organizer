import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import profile from './profile';
import event from './event';
import sectionSelector from './sectionSelector';

const reducer = combineReducers({
    auth,
    event,
    profile,
    sectionSelector,
});

export default reducer;