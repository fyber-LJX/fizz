import { createStore, applyMiddleware, compose } from "redux"
import { createEpicMiddleware } from "redux-observable"
import { ActionType } from "typesafe-actions"
import epics from "./epic/index"
import * as actions from "./actions"
import reducers, { RootState } from "./reducers/index"

type Action = ActionType<typeof actions>

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>()
const initialState: RootState = {
    category: {
        categoryList: []
    }
}
const configStore = (initialState: any) => {
    const middlewares = [epicMiddleware]

    const enhancer = compose(applyMiddleware(...middlewares))

    return createStore(reducers, initialState, enhancer)
}
const store = configStore(initialState)

epicMiddleware.run(epics)

export default store
