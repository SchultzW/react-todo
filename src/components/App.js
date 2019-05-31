

import './App.css';
import React, { Component } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class App extends Component
{
  constructor(props){
    super(props);
    this.state={
      tasks: JSON.parse(localStorage.getItem('TASKS')),
      input:""    
    }
    this.toggleTaskStatus=this.toggleTaskStatus.bind(this);
    this.addTaskClick=this.addTaskClick.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
  }
  render()
  {
    return(
    <div styles='container'>Test</div>
    );
  }
  


  toggleTaskStatus(index) {
    //this.tasks[index].isComplete = !this.tasks[index].isComplete;
    //this.loadTasks();
  }

  addTaskClick() {
  //let target = document.getElementById('addTask');
  //this.addTask(target.value);
  //target.value = ""
  }
  deleteTask(event, taskIndex) {
  //event.preventDefault();
  //this.tasks.splice(taskIndex, 1);
  //this.loadTasks();
  }
}

export default App;
