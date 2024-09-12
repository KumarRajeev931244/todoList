import { ADD_TODO, FINISH_TODO, EDIT_TODO, DELETE_TODO } from "../component/constants/actions";
export const todoFinished = (todo, isFinished) => ({type:FINISH_TODO, payload: {todo, isFinished}})
export const todoDelete = (todo) => ({type:DELETE_TODO, payload: {todo}})
export const todoEdit = (todo, todoText) => ({type:EDIT_TODO, payload: {todo, todoText}})
export const addTodo = (inputText) => ({type:  ADD_TODO, payload: {todoText: inputText}});