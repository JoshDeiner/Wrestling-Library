import React from 'react'
import NextPageItem from './NextPageItem'
import YoutubeComponent from '../YoutubeFunctionality/YoutubeComponent'
import UserComments from '../UserFeatures/comments/UserComments'
import ReturnCard from './ReturnCard'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import BadMatchContainer from '../WithVideoContainer/BadMatchContainer'
import MatchesContainer from '../WithVideoContainer/MatchesContainer'
import MatchCard from '../WithVideoContainer/MatchCard'
import { Button } from 'semantic-ui-react'
import './NextPageContainer.css'
import './next.css'
class NextPageList extends React.Component {

  state = {
         specificMatchData : [],
         clicked: false,
         url : "",
         pathClick: false,
         resourceTitle: '',
         resourceId: null,
         commentsClick: false,
         picId: '',
         popUpClick: false,
         commentsClick: false,
         mappedMatchesCheck: false,
         returnPathClick: false,
         secondReturnPathClick: true,
         imageClicked: null,
         incrementValue: 0,
         otherIncrementValue: 3,
         toggleValue: true,
         otherToggleValue: false,
         idFetchedData: [],
         idMane: 1

  }

  testClick = (e) => {
    let link = e.target.alt.toString()
    let linkToSend = link.split('https://www.youtube.com/watch?v=')[1]
    this.setState({
      clicked: !this.state.clicked,
      url: linkToSend,
      picId: e.target.id,
      pathClick: !this.pathClick
    })

  }

  commentsClick = (e) => {
    e.preventDefault()
    this.setState({
      commentsClick: !this.state.commentsClick
    })
  }

  setResources = (e) => {
    e.preventDefault();
    let pathId = 1
    this.setState({
      resourceTitle: e.target.title,
      resourceId: e.target.id
    })

    let rTitle = this.state.resourceTitle;
    let rId = this.props.id
    let options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        Accepts: 'application/json'

      },
      body: JSON.stringify({'user_id': 1,'slug':'yes', 'wrestling_name': this.props.match.title, 'image_url': this.props.match.image, 'source_link':this.props.match.link, 'dmatch_id':this.props.match.match_id })
    }
    fetch(`http://localhost:3001/api/v1/user_resources/`, options)
    .then(res => alert('added'))
    .then(res => this.addCheckOutCount())

  }

  addCheckOutCount = () => {

    fetch('http://localhost:3001/api/v1/special_matches/5')
    .then(res => res.json()).then(json=>this.setState({idFetchedData:json}))
    .then(json => this.moreEdit())



  }
  moreEdit = () => {
    let resourceId = 5;
    let options = {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json',
        Accepts: 'application/json'

      },
      body: JSON.stringify({'checked_out_count' : 1})

    }
    fetch('http://localhost:3001/api/v1/special_matches/5', options)

  }

  mappedMAtchesButtonCheck = () => {
    this.setState({
      mappedMatchesCheck: !this.state.mappedMatchesCheck
    })
  }

  returnPathClick = () => {
    this.setState({
      returnPathClick: !this.state.returnPathClick
    })
  }

   checkImgClick = (props) => {
     this.setState({
       imageClicked: !props
     })
   }

   togetherClick = () => {
     this.setState({
       returnPathClick: !this.state.returnPathClick,
       secondReturnPathClick: !this.state.secondReturnPathClick


     })
   }

   returnPathClick = () => {


     this.setState({
       returnPathClick: !this.state.returnPathClick,
       incrementValue: this.state.incrementValue + 1,
       otherIncrementValue: this.state.otherIncrementValue + 1,
       toggleValue: !this.state.toggleValue,
       otherToggleValue: !this.state.otherToggleValue
     })
   }

   secondReturnPathClick = () => {
     this.setState({
       secondReturnPathClick: !this.state.secondReturnPathClick
     })
   }

   firstClick = () => {
     this.setState({
       incrementValue: this.state.incrementValue + 1
     })
   }
   secondClick = () => {
     this.setState({
       incrementValue : 0
     })
   }

   render(){

     let returnValue = <div>{this.state.mappedMatchesCheck ? null  : <div>    {this.state.clicked ? <YoutubeComponent height='600' width='600' url={this.state.url}/> : <img onClick={this.testClick} src={this.props.match.image} alt={this.props.match.link} height='300' width='300'></img>}
         <div>
           <h1>{this.props.match.title} </h1>
         <br></br>
         {this.props.match.description}
         </div>
         <br></br><br></br>
         <div>
         <Button color='green' id={this.props.specificMatchData.id} title={this.props.specificMatchData.title} onClick={this.setResources}>AddToResources</Button> <br></br>
         </div>
         <br></br>
         {this.state.commentsClick ?  <UserComments match={this.props.match} matchId={this.props.match.id} />  : <Button color='yellow' onClick={this.commentsClick}>Check out Comments</Button>}

         <br></br><br></br>
         <form><Button color='red'>Return?</Button></form>
         </div>}

         </div>

         let returnItems = this.props.mappedMatches.map(match =>{
           return <ReturnCard getMatchId={this.props.getMatchId} checkImgClick={this.checkImgClick} match={match.props.match} key={match.props.match.id} />
         })

         let mappedCard = this.props.mappedMatches.map(match =>{
           return <MatchCard getMatchId={this.props.getMatchId} checkImgClick={this.checkImgClick} match={match.props.match} key={match.props.match.id} />
         })
    return (

      <div className='nextpagecontainer'>


        {this.state.mappedMatchesCheck ? returnItems: returnValue}

      <div className='invisible'>  d     dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd   dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </div>

      </div>
    )
  }

}

export default NextPageList
