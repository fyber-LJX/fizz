import { TEST_REQUEST, TEST_SUCCESS, TEST_ERROR } from "./constant"
import { createAction } from "typesafe-actions"
import { CategoryItem } from "./../../shared/models/category"

const testGetAction = createAction(TEST_REQUEST, resolve => () => resolve())

const testSetAction = createAction(
    TEST_SUCCESS,
    resolve => (category: Array<CategoryItem>) => resolve(category)
)

const testErrorAction = createAction(TEST_ERROR, resolve => (error: Error) =>
    resolve({ error })
)

export { testGetAction, testSetAction, testErrorAction }
