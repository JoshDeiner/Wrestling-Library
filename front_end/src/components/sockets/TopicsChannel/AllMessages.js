import React from 'react'
import { API_ROOT, HEADERS } from '../../../constants/index';
import List from './allmessages/List'


export default class AllMessages extends React.Component {

  state = {
    messages: []
  }

  componentDidMount = () => {
    fetch(`${API_ROOT}/book_messages`).then(res => res.json()).then(messages => this.setState({messages}))

  }

  render(){
    console.log(this.state.messages);


    return (
      <div>
        <List messages={this.state.messages}/>


      </div>
    )
  }
}
