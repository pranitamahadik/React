import React, { Component } from 'react'

class ClassClick extends Component {

  clickfunction(){
        console.log("test")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickfunction}> Click Button</button>
      </div>
    )
  }
}

export default ClassClick
