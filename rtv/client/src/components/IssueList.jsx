import React from 'react'
import Issue from './Issue.jsx'

export default function IssueList(props){
  const {issues} = props
  console.log(issues)

  // map over sorted issues later based on number of votes


  return (
    // map out all issue components
    <div className="issue-list">
      {issues.map(issue => <Issue {...issue} key={issue._id}/>)}

    </div>
  )
}