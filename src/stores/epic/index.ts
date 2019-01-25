import { combineEpics } from 'redux-observable';

import testEpic from './test';

export default combineEpics(
    testEpic
);