import {MdCheckCircleOutline, MdDelete } from 'react-icons/md' 

const TodoList = ({lists, setAllTodo, callUseEffect, setCallUseEffect}) => {

  const completeTodoHandler = (e, name) => {
    
    let newArry = lists
    newArry.map((todo) => {
      if(todo.name === name) {
        todo.status = 'completed'
      }
    })

    setAllTodo(newArry)
    setCallUseEffect(!callUseEffect)
  }

  return (
    <div className="py-2">
      { lists ?
        <div className="flex flex-col gap-2 pt-4">
          {lists.map((list, i) => {
            return <div key={i} className="flex flex-row justify-between px-2">
              <p className="w-full px-4">{list.name}</p>

              {/* icon box */}
              <div className="flex flex-row flex-nowrap gap-4">
                {list.status === '' ? <button className='px-4 py-1 bg-blue-300 rounded-md text-white hover:bg-blue-600' onClick={(e) => completeTodoHandler(e, list.name)}>complete</button> : <p className='bg-green-100 rounded-full w-8 flex justify-center items-center'><MdCheckCircleOutline className='w-4 h-4 text-green-900'/></p>}
                <button className='bg-red-100 rounded-full w-8 flex justify-center items-center hover:bg-red-400'><MdDelete className='w-4 h-4 text-red-800'/></button>
              </div>
            </div>
          })}
        </div>
      : 
        <p>loading...</p>
      }
    </div>
  );
}
export default TodoList;

// ternary statement
// if => boolean check
// 