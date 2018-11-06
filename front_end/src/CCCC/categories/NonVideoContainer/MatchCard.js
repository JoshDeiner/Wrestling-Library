import React from 'react'
import YouTube from 'react-youtube';
import YoutubeComponent from './YoutubeComponent'
import NextPage from './NextPage'
import { Link } from 'react-router-dom'
import CommentsContainer from '../UserFeatures/comments/CommentsContainer'
import BadCommentsContainer from '../UserFeatures/comments/BadCommentsContainer'
import PopUp from './PopUp'
import { Card, Image } from 'semantic-ui-react'


export default class MatchCard extends React.Component {

  state = {
    clicked: null,
    url : "",
    pathClick: false,
    resourceTitle: '',
    resourceId: null,
    commentsClick: false,
    picId: '',
    popUpClick: false,
    resourceId: ''

  }



  changePath = (e) => {
    e.preventDefault();
    this.setState({
      pathClick: !this.state.pathClick,
      popUpClick: !this.state.popUpClick
    })
    this.props.updatePictureId(e.target.id, this.props.match);

    this.props.updateResourceClick()

  }

  showDetails = (e) => {
    console.log(e.target.name);

  }

  setResources = (e) => {
    e.preventDefault();

    this.setState({
      resourceTitle: e.target.title,
      resourceId: e.target.id
    })

    let rTitle = this.state.resourceTitle;
    let rId = this.props.id
    console.log(rTitle);
    let options = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        Accepts: 'application/json'

      },
      body: JSON.stringify({'user_id': 1,'slug':'yes', 'wrestling_name': this.props.match.title, 'image_url': this.props.match.image, 'source_link':this.props.match.link })
    }
    fetch('http://localhost:3001/api/v1/user_resources', options)
    console.log('pro');

  }

  commentsCheck = (e) => {
    e.preventDefault()
    console.log(e.target.id);
    this.setState({
      commentsClick: !this.state.commentsClick,
      resourceId: e.target.id
    })
  }



  testClick = (e) => {
    let link = e.target.alt.toString()
    let linkToSend = link.split('https://www.youtube.com/watch?v=')[1]
    this.setState({
      clicked: !this.state.clicked,
      url: linkToSend,
      picId: e.target.id
    })

  }

  printResourceId = (e) => {
    console.log(e.target);
  }

  render() {
    console.log(this.state.commentsClick);


    let otherStuff = <div>

    <Link  to='/dangable'>{this.props.match.title}</Link>

    <h6>{this.props.match.description}</h6>
    <h4>{this.props.match.link}</h4>

    </div>

    let notNextPage = <Card.Group>{this.state.clicked ? otherStuff :
     <Card >


       <div id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}><Image onClick={this.testClick} src={this.props.match.image} id={this.props.match.id} alt={this.props.match.link} height='350' width='350'></Image></div>
    <h4 id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}>{this.props.match.title}</h4> <br/>

    </Card>}
      <br></br><br></br>


    </Card.Group>

    return (

      <div className='matchcard'>
        {this.state.popUpClick ? notNextPage  :notNextPage }

        <br></br><br></br>

      </div>
    )
  }
}
