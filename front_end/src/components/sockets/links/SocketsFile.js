import React from 'react'
import { Switch } from 'react-router-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ConvoUserContainer from '../TopicsChannel/UserContainer';

import FreeVideos from '../TopicsChannel/UserContainer';

const socketsLink = () => {
  return (
    <div>
    <Route exact path='/chat/2' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/3' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/1' render = { () => <ConvoUserContainer /> } />
    <Route exact path='/chat/4' render = { () => <ConvoUserContainer  /> } />
    <Route exact path='/chat/5' render = { () => <ConvoUserContainer />} />
    <Route exact path='/chat/6' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/8' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/7' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/9' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/10' render = { () => <ConvoUserContainer/>} />
    <Route exact path='/chat/0' render = { () => <FreeVideos /> } />

    </div>
  )
}



export default socketsLink
