import TodoList from "../../components/page/todo/todoList";
import AddTodoForm from "../../components/page/todo/addTodoForm";

import { useState, useEffect } from 'react'

const TodoLanding = (props) => {

  const [ isFormOpen, setIsFromOpen ] = useState(false)
  const [ allTodo, setAllTodo ] = useState([])
  const [ callUseEffect, setCallUseEffect ] = useState(false)

  const addNewTodo = (todoName) => {
    // duplicate
    let duplicatedTodo = allTodo.find((todo) => todo.name === todoName)

    if(!duplicatedTodo) {
      let newTodo = {
        name: todoName,
        status: ''
      }
  
      setAllTodo((prev) => [
        ...prev,
        newTodo
      ])
    }
  }

  const addTaskButtonHandler = (e) => {
    setIsFromOpen(!isFormOpen)
  }

  useEffect(() => {
    console.log('refreshed')
  },[callUseEffect])

  return (
    <div className="p-4">
      {/* Title */}
      <h3 className="text-3xl font-bold">Todo</h3>

      {/* Button */}
      <button className="p-2 bg-slate-400 text-white hover:bg-slate-300 rounded-md my-4" onClick={addTaskButtonHandler}>add task</button>

      {/* Add Todo */}
      {isFormOpen && <AddTodoForm addNewTodo={addNewTodo}/>}

      {/* List */}
      <TodoList lists={allTodo} setAllTodo={setAllTodo} callUseEffect={callUseEffect} setCallUseEffect={setCallUseEffect}/>

      {/* {console.log(allTodo, 'render')} */}
    </div>
  );
}
export default TodoLanding;

// Landing - page title, add task button, landing list
// List - name, status, check mark, delete