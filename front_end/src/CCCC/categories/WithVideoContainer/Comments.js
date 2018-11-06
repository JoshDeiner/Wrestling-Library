import React from 'react'

export default class Comments extends React.Component {

  state = {
    addCommentCheck : false,
    commentsArray: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/comments')
    .then(res => res.json())
    .then(json => this.setState({
      commentsArray: json
    }))
  }

  addCommentCheckClick = () => {
    this.setState({
      addCommentCheck: !this.state.addCommentCheck
    })
  }

  render(){
    console.log(this.props);
    return (
      <div className='comments'>
        <h2>comments</h2> <br></br>
        <form>
        <button onClick={this.addCommentCheck}>Add Comment</button>
        </form>
      </div>
    )
  }
}
