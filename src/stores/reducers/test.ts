import { ActionType, getType } from "typesafe-actions"
import * as actions from "./../actions/index"
import { CategoryItem } from "./../../shared/models/category"

type Action = ActionType<typeof actions>

interface testState {
    categoryList: Array<CategoryItem>
}

const initialState = {
    categoryList: []
}
const testReducer = (
    state: testState = initialState,
    action: Action
): testState => {
    switch (action.type) {
        case getType(actions.testSetAction):
            return {
                ...state,
                categoryList: action.payload
            }
        case getType(actions.testGetAction):
            return state
        case getType(actions.testErrorAction):
            console.error(action.payload)
            return state
    }
    return state
}

export { testReducer, testState }
