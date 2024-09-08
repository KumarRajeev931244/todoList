import { useReducer} from 'react'
import './App.css'
import AddTodo from './component/addTodo/AddTodo'
import TodoList from './component/todoList/TodoList'
import TodoDispatchContext from './component/context/TodoDispatchContext'
import TodoContext from './component/context/TodoContext'
import todoReducers from './reducers/todoReducers'
function App() {
  const [list, dispatch] = useReducer(todoReducers,[]);
  return (
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider  value={{dispatch}}>
    <AddTodo/>
      
    <TodoList></TodoList>
    </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
