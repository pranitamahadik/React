import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
   constructor(props) {
     super(props)
   
     this.compRef = React.createRef()
   }
   
   refHandler = () => {
    this.compRef.current.inputFocus()
   }
  render() {
    return (
      <div>
        <Input ref={this.compRef}></Input>
        <button onClick={this.refHandler}>Foucs</button>
      </div>
    )
  }
}

export default FocusInput
