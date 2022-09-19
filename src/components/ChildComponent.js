import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}> Greent Parent</button>
    </div>
  )
}

export default ChildComponent
