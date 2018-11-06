import React from 'react'
import OtherMessagesCard from './OtherMessagesCard'

const OtherMessagesList = (props) => {
  console.log(props)
  let messagesMapped = props.messages.map(message => {
    // console.log(message);
    return <OtherMessagesCard user={message.user_name} key={message.id} message={message} />
  })

  return(
    <div>
      {messagesMapped}

    </div>
  )
}


export default OtherMessagesList
