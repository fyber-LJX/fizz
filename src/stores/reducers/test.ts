import { ActionType, getType } from 'typesafe-actions';
import * as actions from './../actions/index';
import { Category } from './../actions/test';

type Action = ActionType<typeof actions>

interface testState {
    categoryList: Category[],
    fetching: boolean
}

const initialState = {
    categoryList: [],
    fetching: false
};
const testReducer = (state: testState = initialState, action: Action):testState => {
    if (action.type === getType(actions.testAction)) {
        return {
            ...state,
            categoryList: actions.testAction
        }
    }

    return state;
};

export {
    testReducer,
    testState
}
