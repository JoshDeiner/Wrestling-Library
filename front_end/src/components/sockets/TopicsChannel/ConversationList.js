import React from 'react';
import { ActionCable } from 'react-actioncable-provider';
import { API_ROOT } from '../../../constants/index';
import NewConversationForm from './NewConversationForm';
import MessagesArea from './MessagesArea';
import Cable from './Cable';
import OtherMessagesArea from './OtherMessagesArea'
import '../style/socketsStyle.css'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Router, withRouter } from 'react-router-dom'
import { socketIdRetrievalSuccess } from '../../../actions/user'

class ConversationsList extends React.Component {
  state = {
    conversations: [],
    activeConversation: null,
    messages: [],
    realConvoId: this.props.location.pathname,
    path: ''
  };

  componentDidMount = () => {

    fetch(`${API_ROOT}/conversations`)
      .then(res => res.json())
      // .then(res => this.fetchMessages())
      .then(conversations =>
        this.setState({
        path: `PATH${this.props.location.pathname}`.split('/chat/').join('_'),
        conversations,
        realConvoId: this.props.socketId
       }));


  };

  checkCategoryName = () => {

    switch(this.state.path) {
      case 'PATH_1':
        return <h2>Books</h2>
      case 'PATH_2':
        return <h2>Nutrition</h2>

      case 'PATH_3':
        return <h2> Documentaries</h2>

      case 'PATH_4':
        return <h2> Legends</h2>

      case 'PATH_5':
        return <h2> Get Hyped</h2>

      case 'PATH_6':
        return <h2> Dope Matches</h2>

      case 'PATH_7':
        return <h2> Summer Fun</h2>

      case 'PATH_8':
        return <h2> Technique Vids</h2>

      case 'PATH_9':
        return <h2> Open Videos</h2>

      case 'PATH_10':
        return <h2> Have fun with it</h2>

      case 'PATH_0':
        return <h2>Technique Help</h2>


    }

  }



  handleClick = id => {
    this.setState({ activeConversation: id });
  };

  handleReceivedConversation = response => {
    const { conversation } = response;
    this.setState({
      conversations: [...this.state.conversations, conversation]
    });
  };

  handleReceivedMessage = response => {
    const { message } = response;
    const conversations = [...this.state.conversations];
    const conversation = conversations.find(
      conversation => conversation.id === message.conversation_id
    );
    conversation.messages = [...conversation.messages, message];
    this.setState({ conversations });
  };

  render = () => {

    let socketsId = this.props.location.pathname.split('/chat/').join('')
    const { conversations, activeConversation } = this.state;
    return (
      <div className="conversationsList">
        <ActionCable
          channel={{ channel: 'ConversationsChannel' }}
          onReceived={this.handleReceivedConversation}
        />
        {this.state.conversations.length ? (
          <Cable
            conversations={conversations}
            handleReceivedMessage={this.handleReceivedMessage}
          />
        ) : null}

        {this.checkCategoryName()}

        {mapConversations(conversations, this.handleClick, socketsId)}
        <NewConversationForm />
        ______________________________________________________________________
        {activeConversation ? (

        <OtherMessagesArea
          user={this.props.user}
          messageUser={this.state.conversations}
            conversation={findActiveConversation(
              conversations,
              activeConversation
            )}
          />
        ) : null}
      </div>
    );
  };
}


// helpers

const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  );
};

const mapConversations = (conversations, handleClick, socketsId) => {
  return conversations.map(conversation => {
    if (conversation.category_id === parseInt(socketsId)) { //was 4
      return (
        <div key={conversation.id} onClick={() => handleClick(conversation.id)}>
          {conversation.title}
        </div>
      );
    }



  });
};



function mapStateToProps(state) {


  return {
    socketId: state.fetchSocketId

  }
}

export default withRouter(connect(mapStateToProps, {socketIdRetrievalSuccess})(ConversationsList));
