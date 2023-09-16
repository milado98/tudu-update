import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { MdOutlineDoneAll } from 'react-icons/md';
import './taskCard.css';

const Taskcard = ({ text, date, onDelete }) => {
    const formattedDate = date
    ? new Date(date).toLocaleString()
    : "No due date";
    console.log(formattedDate);

    const [isDone, setIsDone] = useState(false);

    const toggleDone = () => {
        setIsDone(!isDone);
    };

    const taskClass = isDone ? 'task-done' : '';


  return (
    <div className='min-h-32 w-full my-3 flex p-3  justify-between items-center rounded-br-lg rounded-tl-lg shadow-md bg-gradient-to-b from-gray-300 to-gray-500 sm:p-2 sm:min-h-20'> 
        <div className='card-info'>
            <p className={`mb-3 text-xl font-semibold sm:text-sm ${taskClass}`}>{text}</p>
            <p className='text-xl sm:text-sm'>{formattedDate}</p>
        </div>
        <div className='flex gap-5 sm:gap-8'>
            <div className='border-solid border-green-500 text-green-500' onClick={toggleDone}><MdOutlineDoneAll /></div>
            <div className='border-solid border-red-500 text-red-500' onClick={onDelete}><RiDeleteBin5Line /></div>
        </div>
    </div>
  )
}

export default Taskcard
