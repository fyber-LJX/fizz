import { combineReducers } from 'redux';

import { testReducer, testState } from './test';

export type RootState = {
    test: testState;
}

export default combineReducers({
    testReducer
})