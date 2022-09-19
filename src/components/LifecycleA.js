import React, { Component } from 'react'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Pranita'
    }
    console.log('LifecycleA con')
  }

  static getDrivedStateFromProps(props, state){
    console.log('LifecycleA getDrivedStateFromProps')
    return null
  }

  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }
  
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        test
      </div>
    )
  }  
}

export default LifecycleA
