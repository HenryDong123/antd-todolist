import {ADD_LIST_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM} from "./actionTypes";

const defaultState = {
    inputValue: '',
    itemList: ['dong']
}

export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === ADD_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemList = [...newState.itemList, newState.inputValue]
        newState.inputValue = ''
        return newState
    }
    if (action.type === DELETE_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemList.splice(action.index, 1)
        return newState
    }
    return state
}
