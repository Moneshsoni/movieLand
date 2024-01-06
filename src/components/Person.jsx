import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h1>My   name: {props.name}</h1>
      <h1>My  lastname: {props.l}</h1>
      <h1>My  Age: {props.age}</h1>
    </div>
  )
}

export default Person
