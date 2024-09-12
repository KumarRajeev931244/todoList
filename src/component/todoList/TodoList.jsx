import { useSelector } from "react-redux";
import Todo from "../todo/Todo";
function TodoList({ todoFinished, todoDelete,todoEdit}){

   const list = useSelector((state) => state.todo)

    function onFinished(todo,isFinished){
        todoFinished(todo, isFinished)
        
    }
    function onDelete(todo){
        todoDelete(todo)
      
    }
    function onEdit(todo, todoText){
        todoEdit(todo,todoText)

    }
    return(
        <div>
            {list.length > 0 &&
             list.map(todo => <Todo 
                                key={todo.id}
                                id={todo.id}
                                isFinished={todo.finished} 
                                todoData={todo.todoData}
                                changeFinished={(isFinished) => onFinished(todo, isFinished)}
                                onDelete={() => onDelete(todo)}
                                onEdit = {(todoText) => onEdit(todo, todoText)}

                                />)}
        </div>
    )

}
export default TodoList;