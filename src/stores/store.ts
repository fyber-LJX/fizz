import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers/index';

const state: object = {};

const store = createStore(reducers, state, applyMiddleware(thunkMiddleware));

export default store;
