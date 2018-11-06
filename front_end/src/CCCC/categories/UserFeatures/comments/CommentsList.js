import CommentsCard from './CommentsCard'
import React from 'react'

const CommentsList = (props) => {
  // console.log("category id",props.categoryid);

  let mappedCommentsList = props.comments.map(comment => {
    
    if (props.categoryid === comment.category_id) {
      if (comment.resource_id === props.matchId) {

          return <CommentsCard matchId={props.matchId} comment={comment} user={props.user} clickedMatch={props.match} fetchedComment={comment} key={comment.id} />

      }

    }
    // console.log(props.matchId);


  })
  return (
    <div>

      {mappedCommentsList}

    </div>
  )
}


export default CommentsList
