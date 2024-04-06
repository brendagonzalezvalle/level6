import React, { useContext, useEffect } from 'react'
import IssueList from "./IssueList.jsx"
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'
// import comment from '../../../models/comment.js'

export default function Public(){

  const {allIssues, getAllIssues} = useContext(UserContext)
  
  useEffect(() =>{
    getAllIssues()
  }, [])

  return (
    <div className="public">
      <IssueList 
      issues={allIssues}
      
      />

    </div>
  )
}