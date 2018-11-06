import React from 'react'
import CommentPlease from './CommentPlease'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

export default class CommentsCard extends React.Component {

  state = {
    fetchedComments: ''
  }


  render(){
    console.log(this.props.comment.user_name);
// {this.props.comment.}//
console.log(this.props.comment.content);
console.log(this.props.matchId);
//        {this.props.clickedMatch !== undefined ? <CommentPlease user={this.props.user} commentData={this.props.fetchedComment} fetchedCommentId={this.props.fetchedComment.match_id} clickedId={this.props.clickedMatch.match_id} /> : null}

    return (
      <div className='add'>
      {this.props.comment.user_name} - {this.props.comment.content}



      </div>
    )
  }
}
