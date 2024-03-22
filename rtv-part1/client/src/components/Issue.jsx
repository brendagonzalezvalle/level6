import React from 'react'

//display issues

export default function Issue(props){
  const{title, description, imgUrl, _id} = props
  return (
    <div className="todo">
      <h1>{title}</h1>
      <h3>{description}</h3>


    </div>
  )
}