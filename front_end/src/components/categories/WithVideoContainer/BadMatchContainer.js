import React from 'react'
import MatchCard from './MatchCard'
import PopUp from './PopUp'
import NextPageContainer from '../NextPage/NextPageContainer'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import Api from '../../../constants/api'

class BadMatchContainer extends React.Component {

  state = {
    matches: [],
    picId: '',
    picClicked: false,
    resourceClick: false
  }

  updatePicId = (props) => {
    this.setState({
      picClicked: !this.state.picClicked,
      picId: props
    })
  }

  updateResourceClick = () => {
    this.setState({
      resourceClick: !this.state.resourceClick
    })
  }

  componentDidMount = () => {

    let apiString,
    path = '';




    if(this.props.path === '/specialMatches') {
      path = '6/matches'
    } else if (this.props.path === '/hype') {
      path = '5/hype_videos'
    } else if (this.props.path === '/summer') {
      path = '7/offseason_resources'
    } else if (this.props.path === '/memorable_wrestlers') {
      path = '4/legends'
    }
    apiString = Api+path;


    console.log(apiString);
    fetch(apiString)
    .then(res => res.json())
    .then(json => this.setState({
      matches: json
    }))


  }
  render(){
    let mappedMatches = this.state.matches.map(match => {
      return <MatchCard getMatchId={this.props.getMatchId} updateResourceClick={this.updateResourceClick} resourceMatch={this.props.match} updatePictureId={this.props.updatePictureId} updatePicId={this.updatePicId} match={match} key={match.id} />
    })

    // {this.state.resourceClick ? <NextPageContainer getMatchId={this.props.getMatchId} mappedMatches={mappedMatches} match={this.props.match} /> : mappedMatches}
    // {this.state.resourceClick ? <Redirect to ={`/specialMatches/${this.props.match.id}`} /> : mappedMatches}
    // need to send first one up, and have info in nextpage container available in redirected route

  return (
    <div className='flex-container'>
      {this.state.resourceClick ? <NextPageContainer getMatchId={this.props.getMatchId} mappedMatches={mappedMatches} match={this.props.match} /> : mappedMatches}


    </div>
  )
}
}

export default BadMatchContainer
