import React from 'react'
import TaskForm from './TaskForm'
import Task from './Task'

class TaskList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks: this.props.tasks
        }
        this.addTask = this.addTask.bind(this)
    }

    addTask(newtask){
        let newTasks = this.state.tasks
        newTasks.push(newtask)
        this.setState({tasks: newTasks})
    }

    render(){
        return <div style={{display: 'inline-block'}}>
            <h2>{this.props.name}</h2>
            <ul>
                {this.state.tasks.map((t, index) => <Task key={index} title={t}/>)}
            </ul>
            <TaskForm handleClick={this.addTask}/>
        </div>
    }
}

export default TaskList