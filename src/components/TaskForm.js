import React from 'react'

class TaskForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newtask:''
        }
        this.submit = () => {
            this.props.handleClick(this.state.newtask)
            this.setState({newtask:""})
        }
        this.handleChange = this.handleChange.bind(this)
        // OR YOU CAN USE this.submit = this.submit.bind(this) FOLLOWED BY THE SUBMIT FUNCTION IN THE CLASS BODY AS NORMAL
    }

    handleChange(event){
        this.setState({newtask:event.target.value})
    }

    render(){
        return <div>
            <input name='newtask' onChange={this.handleChange} value={this.state.newtask}></input>
            <input type='submit' onClick={this.submit}></input>
        </div>
    }
}

export default TaskForm