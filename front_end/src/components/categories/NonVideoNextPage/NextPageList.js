import React from 'react'
import NextPageItem from './NextPageItem'
import YoutubeComponent from '../YoutubeFunctionality/YoutubeComponent'
import UserComments from '../UserFeatures/comments/UserComments'
import ReturnCard from './ReturnCard'
import { Link } from 'react-router-dom'
import BadMatchContainer from '../WithVideoContainer/BadMatchContainer'
import MatchesContainer from '../WithVideoContainer/MatchesContainer'
import MatchCard from '../WithVideoContainer/MatchCard'
import { Button, Popup } from 'semantic-ui-react'
import './nonvid.css'
class NextPageList extends React.Component {

  //maybe make a post request upon first link click that says first link has been clicked.
  // if clicked : render that thing. then upon second click destroy imformation, then if nothing there render second part of conditional






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
         otherToggleValue: false

  }

  testClick = (e) => {
    this.setState({
      clicked: !this.state.clicked,
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
    console.log(e.target.title);
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
      body: JSON.stringify({'user_id': 1,'slug':'yes', 'wrestling_name': this.props.match.title, 'image_url': this.props.match.image, 'source_link':this.props.match.link })
    }
    fetch(`http://localhost:3001/api/v1/user_resources/`, options)
    .then(res => alert('added'))

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
   // <PopUpFeature />

   render(){
     console.log(this.props);


     let link = this.props.match.link
//              {this.state.mappedMatchesCheck ? mappedValues : null}


     let returnValue = <div>{this.state.mappedMatchesCheck ? null  : <div>     <img onClick={this.testClick} src={this.props.match.image} alt={this.props.match.link} height='300' width='300'></img>
         <div>
           <a href={link} target="_blank">{this.props.match.title}</a>
         <br></br>
         {this.props.match.description}
         </div>
         <br></br><br></br>
         <Button color='green' id={this.props.specificMatchData.id} title={this.props.specificMatchData.title} onClick={this.setResources}>Add To Resources</Button> <br></br><br></br><br></br>
           {this.state.commentsClick ?  <UserComments match={this.props.match} matchId={this.props.match.id} />  : <Button color='yellow' onClick={this.commentsClick}>Checkout Comments</Button>}

           <br></br><br></br>
          <form><Button color='red' >Return?</Button></form> <br></br><br></br>



         <br></br><br></br><br></br>

         </div>}

         </div>

         let returnItems = this.props.mappedMatches.map(match =>{
           return <ReturnCard user={this.props.user}  checkImgClick={this.checkImgClick} match={match.props.match} key={match.props.match.id} />
         })

         let mappedCard = this.props.mappedMatches.map(match =>{
           return <MatchCard checkImgClick={this.checkImgClick} match={match.props.match} key={match.props.match.id} />
         })
    return (

      <div className='nextpagecontainer'>

        {this.state.mappedMatchesCheck ? returnItems: returnValue}

        <div className='invisible'>  ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd   dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </div>


      </div>
    )
  }

}

export default NextPageList
