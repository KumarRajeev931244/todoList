import {createStore,combineReducers} from 'redux'
import todoReducers from "./reducers/todoReducers";

const reducers = combineReducers({todo: todoReducers});
const store = createStore(reducers)
export default store;