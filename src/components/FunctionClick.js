import React from 'react'

function FunctionClick() {
    function clickfunction(){
        console.log("click event")
    }
  return (
    <div>
      <button onClick={clickfunction}>Click</button>
    </div>
  )
}

export default FunctionClick
