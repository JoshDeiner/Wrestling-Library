import React from 'react'
import CommentsList from './CommentsList'

export default class Comments extends React.Component {

  state = {
    addCommentCheck : false,
    commentsArray: [],
    comments: ''
  }



  componentDidMount = () => {
    let resourceId
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

  updateComments = (e) => {
    let resourceId = 2
    e.preventDefault()
    this.refetchComments()
    let category='special_matches'
    let categoryId=1
    let userId=12
    let username ='josh'
    let options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({'content':this.state.comments, 'user_id':userId, 'user_name':username})
    }
    fetch(`http://localhost:3001/api/v1/special_matches/${resourceId}/match_comments`, options)
    .then(res => this.refetchComments())

  }

  refetchComments = () => {
    let resourceId = 2

    fetch(`http://localhost:3001/api/v1/special_matches/${resourceId}/match_comments`)
    .then(res => res.json())
    .then(json => this.setState({
      commentsArray: json,
      comments: ''
    }))
  }

  render(){
    console.log('comments container',this.props);
    return (
      <div className='comments'>
        <form onSubmit={this.refetchComments}>
          <CommentsList comments={this.state.commentsArray} /><br></br>
          bad
        <button onClick={this.updateComments}>Add Comment</button><br></br>
        <input type='submit'></input>
        <div><textarea  onChange={this.commentsBoxWrite} value={this.state.comments}></textarea></div>
        </form>
      </div>
    )
  }
}
