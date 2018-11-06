import React from 'react';
import NewMessageForm from './NewMessageForm';
import AllMessages from './AllMessages'
import OtherMessagesList from './allmessages/OtherMessagesList'
import '../style/socketsStyle.css'

class OtherMessagesArea extends React.Component {


  render(){
    console.log(this.props);

    return (
      <div>



      <h2>{this.props.conversation.title}</h2>
      <ul><OtherMessagesList messageUser={this.props.messageUser} user={this.props.user} messages={this.props.conversation.messages} /></ul>
      <NewMessageForm  user={this.props.user} refetchAllMessages={this.props.refetchAllMessages} conversation_id={this.props.conversation.id} />

      </div>
    )
  }
}

// <div className="messagesArea">
//   <h2>{title}</h2>
//   <ul>{orderedMessages(messages)}</ul>
//   <AllMessages />
//   <NewMessageForm conversation_id={id} />
//
// </div>


// const OtherMessagesArea = ({
//   conversation: { id, title, messages },
// }) => {
//
//   return (
//     <div className="messagesArea">
//       <h2>{title}</h2>
//       <ul>{orderedMessages(messages)}</ul>
//       <AllMessages />
//       <NewMessageForm conversation_id={id} />
//
//     </div>
//   );
// };

export default OtherMessagesArea;

// // helpers
//
// const orderedMessages = messages => {
//   const sortedMessages = messages.sort(
//     (a, b) => new Date(a.created_at) - new Date(b.created_at)
//   );
//   return sortedMessages.map(message => {
//     console.log(message);
//     return <li key={message.id}>{message.text}</li>;
//   });
// };
