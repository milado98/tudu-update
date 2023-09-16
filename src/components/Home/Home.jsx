import { useReducer, useState } from 'react';
import Taskcard from '../TaskCard/TaskCard';
import { reducer } from '../../reducer';


const defaultState = {
    tasks: [],
    newTask: '',
}

function Home() {
  const [date, setDate] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);


  return (
    <>
      <nav className='p-6 flex justify-between items-center shadow-sm bg-gradient-to-b from-gray-300 to-gray-500'>
        <h2 className='text-2xl font-bold'>Tudu</h2>
        <div className='flex gap-2 items-center'>
          <a href="#" className='text-black cursor-pointer font-semibold'>Home</a>
          <a href="" className='text-black cursor-pointer font-semibold'>My Tasks</a>
        </div>
      </nav>
      <main className='px-4 min-h-screen'>
        <form onSubmit={(e) => {e.preventDefault();
        dispatch({ type: 'ADD_TASK' })}}>
          <h4 className='my-4 text-2xl font-semibold'>Create Task</h4>
          <label htmlFor="taskname" className='task'>
            Task
          </label><br />
          <input type="text" id='taskname' className='my-2 p-2 rounded-br-lg rounded-tl-lg w-full border-solid border-2' value={state.newTask} onChange={(e) => dispatch({ type: 'UPDATE_NEW_TASK', value: e.target.value })} placeholder="New Task" /><br />
          <label htmlFor="datetime" className='date'>
            Due Date
          </label><br />
          <input type="datetime-local" className='my-2 p-2 rounded-br-lg rounded-tl-lg w-full border-solid border-2'name="datetime" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Due date' />
          <button type='submit' className='py-2 px-4 bg-gradient-to-b from-gray-300 to-gray-500 shadow-sm rounded-br-lg rounded-tl-lg cursor-pointer text-l font-semibold mt-4'>Add Task</button>
        </form>
        <div className='tasks'>
        {state.tasks.length === 0 ? (
        <div className="mt-5 text-xl font-semibold">No Tasks Yet😎</div>
      ) : (
        state.tasks.map((task, index) => (
          <div className="todo-item" key={index}>
            <Taskcard
              text={task.text}
              date={task.date}
              onDelete={() => dispatch({ type: 'DELETE_TASK', index })}
            />
          </div>
        ))
      )}
        </div>
      </main>
    </>
  )
}

export default Home

