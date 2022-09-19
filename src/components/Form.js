import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: ''
      }
    }
    
    handleUsenameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username}`)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value= {this.state.username} onChange={this.handleUsenameChange}></input>
            </div>
            <div>
                <label>Comment</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
      
    )
  }
}

export default Form
