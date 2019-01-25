import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import epics from './epic/index';
import * as actions from "./actions";
import reducers, { RootState } from './reducers/index';

type Action = ActionType<typeof actions>

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

const configStore = (initialState?: RootState) => {
    const middlewares = [
        epicMiddleware
    ];

    const enhancer = compose(
        applyMiddleware(...middlewares)
    )

    return createStore(
        reducers,
        initialState,
        enhancer
    )
}
const store = configStore();

epicMiddleware.run(epics);

export default store;
