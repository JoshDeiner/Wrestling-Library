import React from 'react'
import YouTube from 'react-youtube';
import YoutubeComponent from './YoutubeComponent'
import NextPage from './NextPage'
import { Link, Redirect } from 'react-router-dom'
import CommentsContainer from '../UserFeatures/comments/CommentsContainer'
import BadCommentsContainer from '../UserFeatures/comments/BadCommentsContainer'
import { Card, Icon, Image, Popup, Grid, Rating } from 'semantic-ui-react'
import './coolmatches.css'
import { Container, Row, Col } from 'reactstrap';


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
    resourceId: '',
    linkClick: false

  }




  changePath = (e) => {
    console.log(e.target);
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

   otherStuff = () => <div>

  <Link  to='/dangable'>{this.props.match.title}</Link>

  <h6>{this.props.match.description}</h6>
  <h4>{this.props.match.link}</h4>

  </div>


   oddPage = () => {
     if (this.props.match.id % 1 === 0) {
       return (
         <div className="col-md">{this.state.clicked ? this.otherStuff : <Card><div id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}><Image onClick={this.testClick} src={this.props.match.image} id={this.props.match.id} alt={this.props.match.link} height='350' width='350'></Image></div>
            <h4 id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}>{this.props.match.title}</h4> <br/> <br></br>
            <h6>{this.props.match.description}</h6>
            </Card>}
             <div className="w-100"></div>
            <br></br><br></br>

            <div></div>
            </div>

       )
     }

   }

  render() {



    let otherStuff = <div>

    <Link  to='/specialMatches/${this.props.match.id}'>{this.props.match.title}</Link>

    <h6>{this.props.match.description}</h6>
    <h4>{this.props.match.link}</h4>

    </div>



    let notNextPage = <div className="matchcard">{this.state.clicked ? otherStuff :  <Card><div id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}><Image onClick={this.testClick} src={this.props.match.image} id={this.props.match.id} alt={this.props.match.link} height='350' width='350'></Image></div>
        <h4 id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}>{this.props.match.title}</h4> <br/> <br></br>
        </Card>}
         <div className="w-100"></div>
        <br></br><br></br>

        <div></div>
        </div>

        let PopupExampleHtml =

         <Popup
    trigger={notNextPage}
    header='stuff'
    content={this.props.match.description}
    on={['hover']}
  />



        let oddPage = <div className="matchcolor">{this.state.clicked ? otherStuff : <Card><div id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}><Image onClick={this.testClick} src={this.props.match.image} id={this.props.match.id} alt={this.props.match.link} height='350' width='350'></Image></div>
            <h4 id={this.props.match.id} linkId={this.props.match.link} onClick={this.changePath}>{this.props.match.title}</h4> <br/> <br></br>

            </Card>}
             <div className="w-100"></div>
            <br></br><br></br>

            <div></div>
            </div>



    return (

      <div className='matches'>

          {notNextPage}





      </div>
    )
  }
}
