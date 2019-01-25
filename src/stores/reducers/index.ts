import { combineReducers } from 'redux';

import { testReducer, testState } from './test';

export type RootState = {
    categoryList: testState;
}

export default combineReducers({
    categoryList: testReducer
})