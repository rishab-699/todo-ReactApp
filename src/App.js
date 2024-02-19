import React, { useState } from 'react';
import './App.css';
import Listview from './component/listTodo';
import Addtask from './component/addTask';

function App() {
  const [taskList, setTaskList] = useState([]);
  function getId(){
    var i = taskList.length;
    let taskId = 0;
      if(i>0){
      taskId = taskList[i-1].id+1;
      }else{
        taskId = 0;
      }
      return taskId;
  }
  function addTask(title) {
    if(title !== ''){
      const taskId = getId();
      const newTask = {
        id: taskId, // Assign a unique ID
        title: title,
        status: false
      };
      setTaskList(prevTaskList => [...prevTaskList, newTask]);

  }
  else{
    console.log('add some task');
  }
  }

  function onCompleteTask(id) {
    setTaskList(taskList.map(t => {
      if (t.id === id) {
        return { ...t, status: true };
      } else {
        return t;
      }
    }));
  }
  function onDelete(id){
   setTaskList(
    taskList.filter(t=> t.id !== id)
    );
  }

  return (
    <>
    <Listview list={taskList} onComplete={onCompleteTask} onDelete={onDelete} />
      <Addtask Add={addTask} />
      <h1 className='header'>TODO APP</h1>
    </>
  );
}

export default App;
