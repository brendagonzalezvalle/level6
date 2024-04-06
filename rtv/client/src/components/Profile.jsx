import React, {useContext, useEffect} from 'react'
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
    issues,
    getUserIssues,
    // postNewComment
    
  }= useContext(UserContext)

  useEffect(()=>{
    getUserIssues()
  }, [])

  
  return (
    <div className="profile">
      <h1 className='profile-welcome'>Welcome {username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm addIssue={addIssue}
      
      />
      <h3>Political Issues:</h3>
      {/* render issue list, pass array of issues from context state*/}
      <IssueList issues={issues}/> 
    </div>
  )
}

