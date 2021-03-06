import React from 'react'
import CoolMatchesContainer from './CoolMatchesContainer'
import ReturnNav from '../../Navigation/dropdown'
import NextPage from './NextPage'
import BadMatchContainer from './BadMatchContainer'
import './coolmatches.css'
import { Redirect } from 'react-router-dom'


export default class MatchesContainer extends React.Component {

  state = {
    clickedItem: '',
    matches: [],
    clicked: true
  }

  updateItem = (props) => {
    console.log(props);
    if(props) {
      this.setState({
        clicked: !this.state.clicked
      })

    }
  }




  render(){
    console.log(this.props.path);
    // <CoolMatchesContainer matches={this.state.matches} updateItem={this.updateItem} />
    return (
      <div className='matches'>


        <ReturnNav /> <br></br><br></br>
        <div>

        {this.state.clicked ? <BadMatchContainer path={this.props.path} getMatchId={this.props.getMatchId} match={this.props.match} updatePictureId={this.props.updatePictureId}/> : null}

        </div>
    </div>
    )
  }
}
