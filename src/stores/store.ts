import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable'
import thunkMiddleware from 'redux-thunk';

import epics from './epic/index';
import reducers from './reducers/index';

const state: object = {
    fetching: false
};
const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
    reducers, 
    state, 
    applyMiddleware(thunkMiddleware)
);

export default store;
