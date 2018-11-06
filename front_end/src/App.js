import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getUser, createUser, CategoryIdRetrievalSuccess} from './actions/user'
import './stylesheets/App.css'
import {Route, withRouter} from 'react-router-dom'
import './stylesheets/App.css'


import Signup from './components/app/Signup'
import Login from './components/app/Login'
import Home from './components/app/Home'
import { Switch } from 'react-router-dom'
import WithVideoContainer from './components/categories/WithVideoContainer/MatchesContainer'

import About from './components/categories/UserFeatures/About/About'
import BigRecommendationsContainer from './components/categories/UserFeatures/Recommendation/BigRecommendationsContainer'
import Old from './components/categories/UserFeatures/OldItemsContainer/Old'
import NextPage from './components/categories/WithVideoContainer/NextPage'
import ResourcesContainer from './components/categories/UserFeatures/Resources/ResourcesContainer'
import BigResources from './components/categories/UserFeatures/Resources/BigResources'
import NextPageContainer from './components/categories/NextPage/NextPageContainer'

import ChatContainer from './components/categories/chatbox/ChatContainer'
import WrapChatContainer from './components/categories/chatbox/WrapChatContainer'
import CommentsContainer from './components/categories/UserFeatures/comments/CommentsContainer'
import NonVideoContainer from './components/categories/NonVideoContainer/MatchesContainer'

import ConvoUserContainer from './components/sockets/TopicsChannel/UserContainer';

import FreeVideos from './components/sockets/TopicsChannel/UserContainer';
import Acknowledgments from './components/categories/UserFeatures/Acknowledgments/Acknowledgments'
import FurtherAcknowledgments from './components/categories/UserFeatures/Acknowledgments/FurtherAcknowledgments'
import Dropdown from './components/Navigation/dropdown'
import SocketsLinks from './components/sockets/links/SocketsFile'


class App extends Component {

  state = {
    pictureId: '',
    match: [],
    username: '',
    categoryId: ''
  }

  updatePictureId = (props, match) => {
    // console.log(match);
    this.setState({
      pictureId: props,
      match: match
    })
  }

  componentDidMount = () => {
    if(this.props.user) {
      console.log(this.props.user);
      this.setState({
        username: this.props.user.username
      })

    }

  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.user && nextProps.user !== this.props.user) {

    }
  }

  getMatchId = (id) => {
    console.log(id);
  }


  render() {


    return (
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => <Home deleteUser={this.deleteCurrentUser} />} />


        <Route exact path='/specialMatches' render = { () => <WithVideoContainer path={this.props.location.pathname}  getMatchId={this.getMatchId} match={this.state.match} updatePictureId={this.updatePictureId} /> } />
        <Route exact path='/memorable_wrestlers' render = { () => <NonVideoContainer path={this.props.location.pathname}  match={this.state.match} updatePictureId={this.updatePictureId} /> } />
        <Route exact path='/summer/' render = { () => <NonVideoContainer path={this.props.location.pathname}  match={this.state.match} updatePictureId={this.updatePictureId} /> } />
        <Route exact path='/dangable' render = { () => <NextPageContainer match={this.state.match} pictureId={this.state.pictureId}/> } />
        <Route exact path='/hype' render = { () => <WithVideoContainer path={this.props.location.pathname}  getMatchId={this.getMatchId} match={this.state.match} updatePictureId={this.updatePictureId} /> } />
        <Route exact path='/comments' render = { () => <CommentsContainer user={this.props.user} match={this.state.match} /> } />
        <Route exact path='/diet/' render = { () => <NonVideoContainer user={this.props.user} path={this.props.location.pathname}  match={this.state.match} updatePictureId={this.updatePictureId} /> } />
        <Route exact path='/books/' render = { () => <NonVideoContainer path={this.props.location.pathname}  match={this.state.match} updatePictureId={this.updatePictureId} /> } />


        <Route exact path='/recommendations' render = { () => <BigRecommendationsContainer /> } />
        <Route exact path='/old_stuffs' render = { () => <Old /> } />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
        <Route exact path='/about' render = { () => <About /> } />
        <Route exact path='/acknowledgments' render = { () => <Acknowledgments /> } />
        <Route exact path='/further_acknowledgments' render = { () => <FurtherAcknowledgments /> } />
        <Route exact path='/chat' render = { () => <WrapChatContainer /> } />
        <Route exact path='/resources' render = { () => <BigResources /> } />


        <SocketsLinks />

        </Switch>

    </div>

    );
  }
}

function mapStateToProps(state) {

  return {
    user: state.authentication.user,
    categoryId: state.fetchCategoryData.categoryId

  }
}

export default withRouter(connect(mapStateToProps, {getUser, CategoryIdRetrievalSuccess})(App));
