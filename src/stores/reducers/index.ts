import { combineReducers } from "redux"

import { testReducer, testState } from "./test"

export type RootState = {
    category: testState
}

export default combineReducers({
    category: testReducer
})
