import { TEST_REQUEST, TEST_SUCCESS, TEST_ERROR } from './constant';
import { createAction } from "typesafe-actions";

export interface Category {
    categoryId: number,
    title: string,
    pv: number,
    background: string,
    name: string,
    blogNum: number
}

const testGetAction = createAction(TEST_REQUEST, resolve => () => resolve());

const testSetAction = createAction(TEST_SUCCESS, resolve => (category: Array<Category>) => resolve(category));

const testErrorAction = createAction(TEST_ERROR, resolve => (error: Error) => resolve({error}));

export {
    testGetAction,
    testSetAction,
    testErrorAction
};