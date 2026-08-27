import React from 'react'

export default function Greeting(props) {
  return (
    <div>
      <h2>Good Afternoon {props.name} !</h2>
      <h2>{props.name}'s age is {props.age} !</h2>
      <h2>{props.name}'s best skill is {props.skill} !</h2>
      <h2>{props.name}'s best skills are {props.items} !</h2>
      <ul>
        {props.items.map((skill, index) => (
            <li key = {index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}


// Properties which are passed are read-only properties and cannot be overridden