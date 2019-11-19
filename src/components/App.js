

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
      task:'',
      index:'',
      isComplete:'',
      deleteTask:'',
      inputValue:""    
    }
    this.toggleTaskStatus=this.toggleTaskStatus.bind(this);
    this.addTaskClick=this.addTaskClick.bind(this);
    this.deleteTask=this.deleteTask.bind(this);
    this.addTask=this.addTask.bind(this);
  }
  handleToggle()
  {
    const{isComplete}=this.props;
    if(isComplete===true)
      isComplete=false;
    else
      isComplete=true;
    this.setState({isComplete:isComplete});
  }
  handleDelete()
  {

  }
  addTask(task) {
      let newTask = {
        task,
        isComplete: false,
      };
      let parentDiv = document.getElementById('addTask').parentElement;
      if(task === '') {
        parentDiv.classList.add('has-error');
      } else {
        parentDiv.classList.remove('has-error');
        this.tasks.push(newTask);
        this.loadTasks();
      }
}
  render()
  {
    return(
    <div styles='container'>
    <TaskForm onSubmit={this.addTask} />
    </div>
    
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
