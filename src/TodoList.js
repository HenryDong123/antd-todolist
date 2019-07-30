import React, {Component} from 'react'
import './item.css'
import store from './store'
import TodoListUi from './TodoListUi'
import {addListAction, deleteItemAction, getInputChangeAction, getTodoList} from "./store/actionCreate";
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.addItem = this.addItem.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    render() {
        return <TodoListUi
                    inputValue={this.state.inputValue}
                    itemList={this.state.itemList}
                    handleInput={this.handleInput}
                    addItem={this.addItem}
                    deleteItem={this.deleteItem} />
    }
    componentDidMount() {
			const action = getTodoList()
			store.dispatch(action)
    }

		storeChange(){
        this.setState(store.getState())
    }
    handleInput(e) {
        const val = e.target.value
        const action = getInputChangeAction(val)
        store.dispatch(action)
    }
    addItem(){
       const action = addListAction()
       store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList
