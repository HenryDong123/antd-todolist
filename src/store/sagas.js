import { takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import {initListAction} from "./actionCreate";
import axios from 'axios'
function* getInitList() {
		try {
				const res = yield axios.get('../../mock/todoList.json')
				const action = initListAction(res.data)
				yield put(action)
		}catch (e) {
				console.log(e)
		}

}
function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
