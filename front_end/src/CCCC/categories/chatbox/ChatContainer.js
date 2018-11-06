import React from 'react'
import ChatList from './ChatList'
import './chatcontainer.css'
import { Link, Redirect } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import Api from '../../../constants/api'

console.log(Api, 'api');

export default class ChatContainer extends React.Component {

  state= {
    categories: [],
    socketId: null,
    socketClick: null,
    starterId: 0
  }

  checkId = (e) => {
    console.log(e.target);
  }

  componentDidMount = () => {
    fetch(`${Api}`).then(res => res.json())
    .then(json => this.setState({
      categories: json
    }))
  }

  updateCategory = (e) => {

    this.setState({
      socketId: e.target.id,
      socketClick: !this.state.socketClick
    })
  }

  render(){
    console.log(this.state.categories);
    return(
      <div className='chats'>
        
        <h1>Forum Categories</h1>
        <Card ><h2 onClick={this.updateCategory} id={0}>Technique Help</h2></Card>



        <ChatList categories={this.state.categories} />

      {this.state.socketClick ? <Redirect to ={`/chat/${this.state.socketId}`} /> : null }
      </div>
    )
  }
}
