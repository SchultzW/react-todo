import React, { Component } from 'react';

import Task from './Task';
class TaskList extends Component{
    constructor(props){
        super(props)
        this.state={};
    }

render(){
    const{task,index,isComplete,deleteTask}=this.props;
    return(
        <div className="list-group-item checkbox">
            <Task task={task} index={index} 
                toggleTaskStatus={isComplete} 
                deleteTask={deleteTask} />
        </div>
    );
}

}

export default TaskList;
