import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       userLoggedin: false
    }
  }
  
  render() {


    // Using shortcirkit operator

    return( this.state.userLoggedin  && <div>Welcome Pranita</div>)

    // using ternanry operator

    // return(
    //     this.state.userLoggedin ?
    //     (<div>Welcome Pranita</div>) :
    //     (<div>Welcome Guest</div>)
    // )

    // Using veriable
    // let message

    // if (this.state.userLoggedin) {
    //     message = <div>Welcome Pranita</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // If/Else
    // if (this.state.userLoggedin) {
    //     return (<div>Welcome Pranita</div>)
    // } else {
    //     return (<div>Welcome Guest</div>)
    // }
  }
}

export default UserGreeting
