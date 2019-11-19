import React, { Component } from 'react';

class Task extends Component{
    constructor(props){
        super(props)
        this.state={};
    }

    onDeleteTask(event){
        event.preventDefault();
        let deleteTask=this.props.deleteTask;
        let index=this.props.index;
        deleteTask(index);
    }

render(){
    const{toggleTaskStatus}=this.props;
    const{onDeleteTask}=onDeleteTask();
    return(
        <li class="list-group-item checkbox">
        <div class="row">
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
            <label><input id="toggleTaskStatus" type="checkbox" onchange={toggleTaskStatus} value="" class=""></input></label>
          </div>
          <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete?'complete':''}">
            ${this.props.task}
          </div>
          <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
            <a class="" href="/" onClick="toDo.deleteTask(event, {this.props.index})"><i id="deleteTask" data-id="{this.props.index}" class="delete-icon glyphicon glyphicon-trash" onClick={onDeleteTask}></i></a>
          </div>
        </div>
      </li>
    );
}

}

export default Task;
