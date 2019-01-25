import { TEST_REQUEST } from './constant';
import { createAction } from "typesafe-actions";

export interface Category {
    categoryId: number,
    title: string,
    pv: number,
    background: string,
    name: string,
    blogNum: number
}

const testAction = createAction(TEST_REQUEST, resolve => (category: Category[]) => resolve(category));

export default testAction;