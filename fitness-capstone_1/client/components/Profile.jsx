import React, {useContext, useEffect} from 'react'
// import IssueForm from './IssueForm.jsx'
// import IssueList from "./IssueList.jsx"
import Issue from './Issue.jsx'
import { UserContext } from '../context/UserProvider.jsx'


export default function Profile(){
  const {
    user: {
      username
    }
    
  }= useContext(UserContext)

//   useEffect(()=>{
//     getUserIssues()
//   }, [])

  
  return (
    <div className="profile">
      <h1 className='profile-welcome'>Welcome {username}!</h1>
      
      
     
    </div>
  )
}