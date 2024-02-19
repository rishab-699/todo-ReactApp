import React from 'react';
import icon from './deleteIcon.svg';
import confirmBtn from './confirmBtnLight.svg'

export default function ListTodo({list, onComplete, onDelete}) {
  return (
    <div className='taskList'>
      {list.length === 0 ? (
        <h1 className='grey'>No Task to show</h1>
      ) : (
        <ul>
          {list && list.map(todo => (
            <li key={todo.id}>
              {todo.title}
              {todo.status ? (
                <h3 className='statusDone'>Task Completed!</h3>
              ):(
                <h3 className='statusPending'>Task Pending!</h3>
              )
              }
              <div className='actionBtn'>
              <button onClick={() => {onComplete(todo.id)}} className='confirmBtn'><img src={confirmBtn} alt='done'/></button>
              <button onClick={() => {onDelete(todo.id)}} className='deleteBtn'><img src={icon} alt='delete'/></button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}
