// import { filter, switchMap, map } from 'rxjs/operators';
// import { ActionType, isActionOf } from 'typesafe-actions';
// import { Epic } from "redux-observable";
// import { setRouteInfo } from '../actions';
// import { RootState } from '../reducers';
// import { from } from 'rxjs';
// import { RouteType } from 'src/shared/models/route';

// const getData = (data: RouteType) => data

// type Action = ActionType<typeof setRouteInfo>
// // const routeEpic: Epic<Action, Action, RootState> = (action$) => {
// //     return action$.pipe(
// //         filter(isActionOf(setRouteInfo)),
// //         switchMap((action: Action) =>
// //             from(getData({
// //                 id: action.payload.id,
// //                 path: action.payload.path
// //             })).pipe(
// //                 map(setRouteInfo)
// //             )
// //         )
// //     )
// // }
