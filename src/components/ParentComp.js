import React, { Component } from 'react'
import MemoComp from './MemoComp'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Pranita'
      }
    }
    
    componentDidMount(){
        setInterval( () => {
            this.setState({
                name: 'Pranita'
            })
        }, 2000)
    }

  render() {
    console.log("Parent rendering")
    return (
      <div>
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp
