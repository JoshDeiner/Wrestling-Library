import React from 'react'

const CommentPlease = (props) => {
  // console.log(props.user);
  if(props.user) {
    console.log(props.user.username);
  }

  // console.log('fetchedId', props.fetchedCommentId);
  //
  // console.log('clicked id', props.clickedId);
  // console.log('comment data' ,props.commentData);

  let fetchedId = props.fetchedCommentId
  let clickedId = props.clickedId

  let showCommentData = <div>
    {props.commentData.user_name} : {props.commentData.content}


  </div>

  // let other = <div>
  //   {props.user.user_name} : {props.commentData.content}
  //
  //
  // </div>
  return (
    <div>
      

      {fetchedId === clickedId ? showCommentData : null}
    </div>
  )
}

export default CommentPlease
