// import React from 'react';
// import NewMessageForm from './NewMessageForm';
// import PreviousMessages from './PreviousMessages'
//
// const MessagesArea = ({
//   conversation: { id, title, messages },
// }) => {
//   return (
//     <div className="messagesArea">
//       <h5>Plan Title: {title}</h5>
//       <ul>{newOrderedMessages(messages)}</ul>
//       <NewMessageForm conversation_id={id} />
//     </div>
//   );
// };
//
// export default MessagesArea;
//
// // helpers
//
// const newOrderedMessages = messages => {
//   const sortedMessages = messages.sort(
//     (a, b) => new Date(a.created_at) - new Date(b.created_at)
//   );
//   return sortedMessages.map(message => {
//     return <li key={message.id}>{message.user.username}: {message.content}</li>;
//   });
// }; was old


// ------------------------------------------------------------ //


import React from 'react';
import NewMessageForm from './NewMessageForm';
import AllMessages from './AllMessages'
//
// class MessagesArea extends React.Component {
//
//   state = {
//     messages: []
//   }
//
//   componentDidMount = () => {
//     fetch(`http://localhost:3001/messages`).then(res => res.json())
//     .then(json => this.setState({ messages : json }))
//   }
//
//   render(){
//     return(
//       <div>
//       <div className="messagesArea">
//         <h2>{title}</h2>
//         <ul>{orderedMessages(messages)}</ul>
//         <NewMessageForm conversation_id={id} />
//       </div>
//
//
//       </div>
//     )
//   }
// }

const MessagesArea = ({
  conversation: { id, title, messages },
}) => {

  return (
    <div className="messagesArea">
      <h2>{title}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <AllMessages />
      <NewMessageForm conversation_id={id} />

    </div>
  );
};

export default MessagesArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.text}</li>;
  });
};
