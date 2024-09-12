
import { useDispatch } from 'react-redux'
import AddTodo from './component/addTodo/AddTodo'
import TodoList from './component/todoList/TodoList'
import { bindActionCreators } from 'redux';
import { addTodo,todoFinished,todoEdit, todoDelete } from './action/todoAction';

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({ addTodo,todoFinished,todoEdit, todoDelete }, dispatch)
   return (

    
    <>
      <AddTodo addTodo = {actions.addTodo}/>
      <TodoList todoDelete={actions.todoDelete} todoEdit={actions.todoEdit} todoFinished= {actions.todoFinished}  />
    </>
  )
}

export default App
