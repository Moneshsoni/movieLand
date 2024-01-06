import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount] = useState(0) 

  function handleclick(){
    setCount(count+2)
  }
 
  function reducebyTwo(){
    setCount(count-2);
  }
  return (
    <div>
      <h1>Counter Number</h1>
      <h1>{count}</h1>
      <button onClick={handleclick}>ADD+2</button>
      <h3>Counter Project</h3>
      <button onClick={reducebyTwo}>SUB-2</button>
    </div>
  )
}

export default Counter
