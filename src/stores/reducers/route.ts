import { ActionType, getType } from "typesafe-actions"
import { setRouteInfo } from "./../actions"
import { RouteType } from "./../../shared/models/route"

type Action = ActionType<typeof setRouteInfo>

const initialState: RouteType = {
    id: 0,
    path: "/blog"
}

const routeReducer = (
    state: RouteType = initialState,
    action: Action
): RouteType => {
    switch (action.type) {
        case getType(setRouteInfo):
            return {
                ...state,
                ...action.payload
            }
    }
    return state
}

export { routeReducer }
