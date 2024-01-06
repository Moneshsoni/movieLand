import React from 'react'
import {useState,useEffect} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	useEffect(()=>{
		alert("You've changed the counter to"+count);
	},[count]);

  return (
    <div>
      <button onClick={()=> setCount((prevCount)=>prevCount+1)}>+</button>  
      <h1>{count}</h1>
			<button onClick={()=> setCount((prevCount)=>prevCount-1)}>-</button>
    </div>
  )
}

export default Counter
