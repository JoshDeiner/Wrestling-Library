import React from 'react'
import Card from './Card'

const List = (props) => {
  let mappedList = props.messages.map(message => {
    return <Card message={message} key={message.id} />
  })

  return(
    <div>

      {mappedList}


    </div>
  )
}

export default List
