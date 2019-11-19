import React from 'react';

class TaskForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            task:''
        };
        this.inputChanged= this.inputChanged.bind(this);
        //this.onChange=this.onChange.bind(this);
        this.submitTask=this.submitTask.bind(this);
    }
    inputChanged(e){
        const{value}=e.target;
        this.setState({task:value});
    }
    submitTask(event)
    {
        event.preventDefault();
        const{task}=this.state
        const {addTask}=this.props.onSubmit;
        addTask(task);
    }

    render() {
        return (
            <div className="row input-area">
                <form onSubmit={this.submitTask}>
                    <div className="col-md-1">
                        <label htmlFor="task">Task:</label>
                    </div>
                    <div className="form-group col-md-10">
                        <input className="form-control"
                            type="input" name="task" 
                            value={this.state.task}
                            onChange={this.inputChanged}
                        />
                    </div>
                    <div className="form-group col-md-1">
                        <button type="submit" className="btn btn-success"> Add Task </button>
                    </div>
                    <div className="col-md-1"></div>
                </form>
            </div>
        );
    }
}

export default TaskForm;