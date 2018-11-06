import React from 'react'
import ChatContainer from './ChatContainer'
import './chatcontainer.css'
import RegularReturnNav from '../../Navigation/dropdown'

export default class WrapChatContainer extends React.Component {



  render(){
    return(
      <div className='chatcontainer'>
        <RegularReturnNav />

        <ChatContainer />


      </div>
    )
  }
}
