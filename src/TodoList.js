import React, {Component} from 'react'
import {Input, List} from 'antd'
import './item.css'
import store from './store'
import {addListAction, deleteItemAction, getInputChangeAction} from "./store/actionCreate";
const { Search } = Input;
class TodoList extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     itemList: [],
        //     inputValue: '',
        //     isToggle: false
        // }
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.addItem = this.addItem.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }
    render() {
        return (
            <div>
                <Search value={this.state.inputValue} onChange={this.handleInput} enterButton="添加" onSearch={this.addItem} placeholder="输入事项" allowClear={true} size='default' style={{width: '300px',margin: '40px auto',display: 'block'}}/>
                <List
                    bordered
                    dataSource={this.state.itemList}
                    style={{width: '300px', margin: '-20px auto'}}
                    renderItem={(item, index) => (
                        <List.Item className={"item" + (this.state.isToggle? ' active': '')} onClick={this.deleteItem.bind(this, index)}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
    storeChange(){
        this.setState(store.getState())
    }
    handleInput(e) {
        const val = e.target.value
        const action = getInputChangeAction(val)
        store.dispatch(action)
    }
    addItem(e){
       const action = addListAction()
       store.dispatch(action)
    }
    deleteItem(index){
        // this.setState((prevState)=>{
        //     const itemList = prevState.itemList
        //     itemList.splice(index, 1)
        //     return {itemList}
        // })
        // return el.style.textDecoration= 'line-through'
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList
