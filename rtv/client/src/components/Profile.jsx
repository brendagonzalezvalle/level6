import React, {useContext} from 'react'
import IssueForm from './IssueForm.jsx'
import IssueList from "./IssueList.jsx"
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'


export default function Profile(){
  const {
    user: {
      username
    }, 
    addIssue, 
    issues
  }= useContext(UserContext)
  return (
    <div className="profile">
      <h1>Welcome @{username}</h1>
      <h3>Add A Todo</h3>
      <IssueForm addIssue={addIssue} />
      <h3>Your Todos</h3>
      {/* render issue list, pass array of issues from context state*/}
      <IssueList issues={issues}/> 
    </div>
  )
}