import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider.jsx'
import CommentForm from './CommentForm.jsx'
// import comment from '../../../models/comment.js'

//display issues

export default function Issue(props){


  const { getAllComments } = useContext(UserContext); // Access the getAllComments function from the context

  // Fetch all comments once when the application loads using the context's getAllComments function
  useEffect(() => {
      getAllComments(); // Use the function from the context
  }, []); // Empty dependency array ensures this effect runs only once when the app starts


  const {downVoteIssue, upVoteIssue, user, allComments, postNewComment} = useContext(UserContext)
  console.log(allComments)

  const{title, description, _id, likedUsers, dislikedUsers, user: userId } = props
  console.log(likedUsers.length)


  
 

  const filteredComments = allComments.filter(comment => comment.issue === _id);
  const displayComments = filteredComments.map((comment)=>{
  return <li className='comment-text'>{comment.text}</li>

 })

  return (
    <div className="issue">
      <div className='issue-title'>
        <h1 className='issue-political-title' > Title: {title}</h1>
        <h3 className='issue-political-description'> Question: {description}</h3>

      </div>
      <h3 className='description'> 
      Comments: 
        <ul>
          {displayComments}

        </ul>
      
      </h3>
      <div className='issue-like-unlike-container'>
        <button onClick={()=> upVoteIssue(_id)}>Like</button>
      { userId === user._id && <>
        
        {/* <button>Edit</button>
        <button>Delete</button> */}
        
        </> }
        <p>{likedUsers.length}</p>
        <button onClick={()=> downVoteIssue(_id)} >Unlike</button>
        <p>{dislikedUsers.length}</p>


      </div>
     
      <CommentForm
       issueId = {_id}
       postNewComment={postNewComment}
      
      />


    </div>
  )
}

//work on edit & delete issues & work on comments . Add new comments and see them on web page
