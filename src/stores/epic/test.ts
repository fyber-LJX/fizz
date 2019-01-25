import { Epic } from 'redux-observable';
import { ActionType, isActionOf } from 'typesafe-actions';
import {testAction} from './../actions/index';
import { RootState } from './../reducers/index';
import { filter, map } from 'rxjs/operators';

type Action = ActionType<typeof testAction>;

const testEpic: Epic<Action, Action, RootState> = (action$, store) => {
    action$.pipe(
        filter(isActionOf(testAction.success)),
        map(testAction)
    )
}

export default testEpic;