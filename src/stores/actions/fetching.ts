import { FETCHING } from "./constant"
import { createAction } from "typesafe-actions"

const fetchingAction = createAction(
    FETCHING,
    resolve => (fetching: boolean = true) => resolve(fetching)
)

export { fetchingAction }
