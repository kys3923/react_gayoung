import { useState } from 'react'

const AddTodoForm = ({addNewTodo}) => {

  const [inputtedTodo, setInputtedTodo] = useState('')

  const inputNameChangeHandler = (e) => {
    setInputtedTodo(e.target.value)
  }

  const addButtonHandler = (e) => {
    if(inputtedTodo === '') {
      return console.log('no value entered')
    }

    addNewTodo(inputtedTodo)
  }

  return (
    <div className="p-4 bg-slate-200 rounded-md flex flex-col flex-nowrap gap-2">
      {/* Title */}
      <div>
        <p>Please enter your todo...</p>
      </div>

      {/* Form */}
      <div className="flex flex-row flex-nowrap">
        <input type='text' className="rounded-l-md w-full px-2 py-1" value={inputtedTodo} onChange={inputNameChangeHandler} />
        <button className="rounded-r-md bg-blue-700 text-white px-4 text-sm font-bold hover:bg-blue-500" onClick={addButtonHandler}>ADD</button>
        {/* <p>{inputtedTodo}</p> */}
      </div>
    </div>
  );
}
export default AddTodoForm;