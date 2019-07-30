import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM, INIT_LIST} from "./actionTypes";
import axios from "axios";
import store from "./index";
export const initListAction = (data) =>({
				type: INIT_LIST,
				data
		}
)
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
export  const getTodoList = () => {
		return () => {
				axios.get('../mock/todoList.json').then(res => {
						const data = res.data
						const action = initListAction(data)
						store.dispatch(action)
				})
		}
}
