import React, { useState } from 'react'
import Todo from './components/Todo';
import Form from './components/Form';
import ZeroTasks from './Components/ZeroTasks'

import { v4 as uuidv4 } from "uuid";

import Logo from './assets/logo.svg';




function App() {  

  const [tasks, setTasks] = useState([]);   

  function addTask(name) {
    const newTask = {id: "todo-" + uuidv4(), name: name, completed: false};
    setTasks([...tasks, newTask]);
    
  }

  const taskList = tasks.map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    
  />
));

  
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  
  const tasksNoun = taskList.length !== 0 ? 'tarefas' : 'tarefa';
  const headingText = `${tasksNoun} criada `;
  
  const taskCompleted = tasks.filter(task => task.completed).length;
  const taskNounComp = taskCompleted !== 1 ? 'tarefa' : 'tarefas';
  const headingTextComp = `${taskNounComp} concluida `;




  return (
    <div className="App">
      <div className='App-container'>
        <div className="App-header">
              <img src={Logo} alt="logo do app todo ignite" />
        </div>
        <div className="App-main-content">
              <Form addTask={addTask} />    
          
          <div className='Tasks-counter'>
            <div className='Tasks-counter-creation'>
              {headingText}
              <div className='Counter'>
                {taskList.length}
              </div>
            </div>
            <div className='Tasks-counter-creation'>
              {headingTextComp}
              <div className='Counter'>
                {taskCompleted}
              </div>
            </div>
            
            
          </div>
          
              {taskList.length > 0 ? taskList : <ZeroTasks />}
         
        </div>
      </div>
    </div>
  );
}

export default App