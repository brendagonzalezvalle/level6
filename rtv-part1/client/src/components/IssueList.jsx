import React from 'react'
import Issue from './Issue.jsx'

export default function IssueList(props){
  const {issues} = props
  return (
    // map out all issue components
    <div className="todo-list">
      {issues.map(issue => <Issue {...issue} key={issue._id}/>)}

    </div>
  )
}