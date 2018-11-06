import React from 'react'
import { Switch } from 'react-router-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ConvoUserContainer from '../TopicsChannel/UserContainer';

import FreeVideos from '../TopicsChannel/UserContainer';

const socketsLink = () => {
  return (
    <div>
      <Route exact path='/recommendations' render = { () => <BigRecommendationsContainer /> } />
      <Route exact path='/old_stuffs' render = { () => <Old /> } />
      <Route path='/login' render={() => <Login />} />
      <Route path='/signup' render={() => <Signup />} />
      <Route exact path='/about' render = { () => <About /> } />
      <Route exact path='/acknowledgments' render = { () => <Acknowledgments /> } />
      <Route exact path='/further_acknowledgments' render = { () => <FurtherAcknowledgments /> } />
      <Route exact path='/chat' render = { () => <WrapChatContainer /> } />
      <Route exact path='/resources' render = { () => <BigResources /> } />

    </div>
  )
}



export default socketsLink
