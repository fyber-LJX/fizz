import { FETCHING } from './constant';
import { createAction } from "typesafe-actions";

export interface Category {
    categoryId: number,
    title: string,
    pv: number,
    background: string,
    name: string,
    blogNum: number
}

const fetchingAction = createAction(FETCHING, resolve => (fetching: boolean = true) => resolve(fetching));

export {
    fetchingAction
};