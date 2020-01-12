import * as types from '../actions/action-types';

export function selectedOne(selected) {
    return {
        type: types.SELECT_ONE_SELECTED,
        selected
    };
}
export function selectedTwo(selected) {
    return {
        type: types.SELECT_TWO_SELECTED,
        selected
    };
}
export function query(queryValue) {
    return {
        type: types.QUERY_VALUE,
        queryValue
    };
}
