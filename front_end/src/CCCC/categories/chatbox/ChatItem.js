import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import {Route, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import {getUser, socketIdRetrievalSuccess} from '../../../actions/user'

class ChatItem extends React.Component {

  state= {
    item: [],
    socketId: null,
    socketClick: false,
    socketName: null
  }


  updateCategory = (e) => {

    this.setState({
      socketId: e.target.id,
      socketClick: !this.state.socketClick
    })

    this.props.socketIdRetrievalSuccess(e.target.id)

  }


  render(){




    return(
      <Card >
        <h2 onClick={this.updateCategory} id={this.props.category.id} value={this.props.category.title} >{this.props.category.title}</h2>
        {this.state.socketClick ? <Redirect to ={`/chat/${this.props.socketId}`} /> : null}




      </Card>
    )
  }
}

function mapStateToProps(state) {


  return {
    user: state.authentication.user,
    socketId: state.fetchSocketId

  }
}

export default withRouter(connect(mapStateToProps, {getUser, socketIdRetrievalSuccess}) (ChatItem));
