import React, { useState } from 'react'

const initInputs = {
  text: ""
  
}

export default function CommentForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const {postNewComment, issueId} = props

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    postNewComment(inputs, issueId)
    setInputs(initInputs)
  }

  const { text} = inputs
  return (
    <form className="commentform-container" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Add a comment...."/>
    
      <button>Submit</button>
    </form>
  )
}