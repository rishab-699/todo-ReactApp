import React, { useState } from 'react'


export default function Addtask({Add}) {
    const [title, setTitle] = useState('');
  return (
    <div className='addTask'>
      <input type="text" name='task' id='task' value={title} placeholder='Add Task Here' onChange={e => setTitle(e.target.value)} />
      <button onClick={()=>{
        Add(title);
        setTitle('');
      }}>ADD</button>
    </div>
  )
}
