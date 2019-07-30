import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM} from "./actionTypes";

export const getInputChangeAction = (value) =>({
        type: CHANGE_INPUT_VALUE,
        value
    }
)
export const addListAction = () =>({
        type: ADD_LIST_ITEM,
    }
)
export const deleteItemAction = (value) =>({
        type: DELETE_ITEM,
        value
    }
)

