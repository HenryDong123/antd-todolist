import React, {Component} from 'react'
import {Input, List} from 'antd'
import './item.css'
const { Search } = Input;
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            itemList: [],
            inputValue: '',
            isToggle: false
        }
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
                    renderItem={(item, index) => (
                        <List.Item className={"item" + (this.state.isToggle? ' active': '')} onClick={() => {this.deleteItem()}}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        )
    }

    handleInput(e) {
        const val = e.target.value
        this.setState(()=> ({
            inputValue: val
        }))
    }
    addItem(e){
        this.setState((prevState) => ({
            itemList: [...prevState.itemList, prevState.inputValue],
            inputValue: ''
        }))
    }
    deleteItem(){
        // this.setState((prevState)=>{
        //     const itemList = prevState.itemList
        //     itemList.splice(index, 1)
        //     return {itemList}
        // })
        // return el.style.textDecoration= 'line-through'
        this.setState((prevState) => ({
            isToggle: !prevState.isToggle
        }))
    }
}

export default TodoList
