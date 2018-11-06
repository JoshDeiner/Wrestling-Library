import React from 'react'
import ChatItem from './ChatItem'

const ChatList = (props) => {
  console.log(props)

  let mappedCategories = props.categories.map(c => {
    return <ChatItem category={c} key={c.id} />
  })

  return(
    <div>{mappedCategories}</div>
  )
}

export default ChatList
