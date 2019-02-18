import { createAction } from "typesafe-actions"
import { ROUTE } from "./constant"
import { RouteType } from "./../../shared/models/route"

const setRouteInfo = createAction(ROUTE, resolve => (routeInfo: RouteType) =>
    resolve(routeInfo)
)

export { setRouteInfo }
