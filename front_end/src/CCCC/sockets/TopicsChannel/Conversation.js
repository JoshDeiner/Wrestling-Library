import React from 'react'
import { ActionCable } from 'react-actioncable-provider';
import Cable from '../components/Cable';
import MessagesArea from '../components/MessagesArea';
import OtherMessagesArea from '../components/OtherMessagesArea';
// import NewMessageForm from '../components/NewMessagesForm';

// import User from '../components/User'
// import Message from '../components/Message'

export default class Conversation extends React.Component {
  state = {
    conversation: {
      id: "",
      title: "",
      messages: []
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

    fetch(`http://localhost:3000/conversations/${nextProps.planId}`)
    .then(res => res.json())
    .then(conversation => this.setState({conversation}))
  }

  refetchAllMessages = () => {
    fetch(`http://localhost:3000/conversations/${nextProps.planId}`)
    .then(res => res.json())
    .then(conversation => this.setState({conversation}))

  }

  handleReceivedMessage = response => {
    const { message } = response;
    const conversation = this.state.conversation;
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversation });
  };

  render() {
    console.log('in convo');
    // <MessagesArea conversation={this.state.conversation} />

    return(
      <div className="conversation">
        <ActionCable channel={{ channel: 'ConversationsChannel' }} />
        <Cable conversation={this.state.conversation} handleReceivedMessage={this.handleReceivedMessage} />
        <OtherMessagesArea refetchAllMessages={this.refetchAllMessages} conversation={this.state.conversation} / >
      </div>
    )
  }
}
