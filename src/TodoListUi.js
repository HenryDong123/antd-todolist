import React from 'react'
import {Input, List} from "antd";
const { Search } = Input;
const TodoListUi = (props) => {
		return (
				<div>
						<Search value={props.inputValue} onChange={props.handleInput} enterButton="添加" onSearch={props.addItem} placeholder="输入事项" allowClear={true} size='default' style={{width: '300px',margin: '40px auto',display: 'block'}}/>
						<List
								bordered
								dataSource={props.itemList}
								style={{width: '300px', margin: '-20px auto'}}
								renderItem={(item, index) => (
										<List.Item  onClick={()=>props.deleteItem(index)}>
												{item}
										</List.Item>
								)}
						/>
				</div>
		)
}
export default TodoListUi
