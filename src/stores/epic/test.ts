import { Epic } from 'redux-observable';
import { ActionType, isActionOf } from 'typesafe-actions';
import * as actions  from './../actions/index';
import { RootState } from './../reducers/index';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { testPromise } from './../../fetch/test';
import { from, of } from 'rxjs';

type Action = ActionType<typeof actions>;

const testEpic: Epic<Action, Action, RootState> = (action$) => {
    return action$.pipe(
        filter(isActionOf(actions.testGetAction)),
        switchMap(() => 
            from(testPromise()).pipe(
                map(actions.testSetAction),
                catchError((error: Error) => of(actions.testErrorAction(error)))
            )
        )
    )
}

export default testEpic;