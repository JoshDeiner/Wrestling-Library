import React from 'react'
import MatchCard from './MatchCard'
import PopUp from './PopUp'
import NextPageContainer from '../NonVideoNextPage/NextPageContainer'
import { Card, Image } from 'semantic-ui-react'
import Api from '../../../constants/api'
import LegendsContainer from '../legends/LegendsContainer'

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

    let ApiString,
    path = '';

    if(this.props.path === '/books') {
      console.log('books ready');
      path = '/1/books'
    } else if (this.props.path === '/diet') {
      path = '/2/nutrition'
    } else if (this.props.path === '/summer') {
      path = '/7/offseason_resources'
    } else if (this.props.path === '/memorable_wrestlers') {
      path = '/4/legends'
    }

    ApiString = Api+path;

    fetch(`${ApiString}`)
    .then(res => res.json())
    .then(json => this.setState({
      matches: json
    }))


  }

  render(){

    let mappedMatches = this.state.matches.map(match => {
      return <MatchCard updateResourceClick={this.updateResourceClick} resourceMatch={this.props.match} updatePictureId={this.props.updatePictureId} updatePicId={this.updatePicId} match={match} key={match.id} />
    })

  return (
    <div className='flex-container'>
      {this.props.path ==='/memorable_wrestlers' ? <LegendsContainer /> :
      (this.state.resourceClick ? <NextPageContainer mappedMatches={mappedMatches} match={this.props.match} /> : mappedMatches)

    }

    </div>
  )
}
}



export default BadMatchContainer
