import { combineReducers } from "redux"

import { testReducer, testState } from "./test"

export type RootState = {
    category?: testState
    userInfo?: any
    routeInfo?: {}
}

export default combineReducers({
    category: testReducer
})
