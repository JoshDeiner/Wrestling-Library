import React from 'react'
import CommentsList from './CommentsList'
import { Link } from 'react-router-dom'
import commentpractice from './commentpractice'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import './comments.css'
export default class CommentsContainer extends React.Component {

  state = {
    addCommentCheck : false,
    commentsArray: [],
    comments: '',
    categoryId: ''
  }



  componentDidMount = () => {
    // let categoryId=this.props.match.id
    fetch('http://localhost:3001/api/v1/comments')
    .then(res => res.json())
    .then(json => this.setState({
      commentsArray: json
    }))
  }

  addCommentCheckClick = (e) => {
    e.preventDefault()
    this.setState({
      addCommentCheck: !this.state.addCommentCheck
    })
  }

  commentsBoxWrite =(e) => {
    e.preventDefault();
    // console.log(e.target.value);
    this.setState({
      comments: e.target.value
    })
  }

  // conditonalUpdate = (e) => {
  //
  //     this.updateComments(e)
  //
  //
  // }

  updateComments = (e) => {
    e.preventDefault()
    this.refetchComments()
    let category='special_matches'
    // let categoryId=this.props.match.id
    let username ='jj' //need to interpolate this username variable from app

    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({'content':this.state.comments, 'user_name':this.props.user.username, 'resource_id': this.props.matchId, 'category_id': this.props.matchCategory.category_id})
    }
    fetch(`http://localhost:3001/api/v1/comments`, options)
    .then(res => this.refetchComments())

//interpolated -     fetch(`http://localhost:3001/api/v1/${category}/${categoryId}/comments`, options)
  }

  refetchComments = () => {
    // let categoryId=this.props.match.id
    fetch(`http://localhost:3001/api/v1/comments`)
    .then(res => res.json())
    .then(json => this.setState({
      commentsArray: json,
      comments: ''
    }))
  }

  render(){
    console.log(this.props.user);
    // console.log(this.props.matchCategory.category_id)
    // console.log(this.props.matchCategory.category_id);
//old stuff :

// <Button color='teal' onClick={this.updateComments}>Add Comment</Button><br></br>

    return (
      <div className='comments'>


        <Comment.Group >
          <div className='comments-header'>
    <Header as='h3' dividing>Comments</Header>
    </div>

    <form onSubmit={this.refetchComments}>
      <CommentsList categoryid={this.props.matchCategory.category_id} matchId={this.props.matchId} user={this.props.user} match={this.props.match} comments={this.state.commentsArray} /><br></br><br></br>

  </form>


      <textarea rows="4" cols="50" onChange={this.commentsBoxWrite} value={this.state.comments}/>
      <br></br><br></br>
      <div className='buttonAdd'>
    <Button color='teal' onClick={this.updateComments}>Add Comment</Button><br></br>
    </div>
  </Comment.Group>


      </div>
    )
  }
}
