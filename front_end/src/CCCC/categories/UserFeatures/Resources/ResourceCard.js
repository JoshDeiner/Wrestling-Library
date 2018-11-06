import React from 'react'
import YoutubeComponent from '../../YoutubeFunctionality/YoutubeComponent'
import { Link } from 'react-router-dom'
import './Resources.css'
import { Button, Popup, Card, Image, Confirm  } from 'semantic-ui-react'
import Video from './Video'


export default class ResourceCard extends React.Component {

  state = {
    clicked: null,
    url : "",
    pathClick: false,
    resourceTitle: '',
    resourceId: null,
    open: false,
    videoClickButton: false

  }
  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })



  testClick = (e) => {

    let link = e.target.alt.toString()
    let linkToSend = link.split('https://www.youtube.com/watch?v=')[1]
    this.setState({
      clicked: !this.state.clicked,
      url: linkToSend
    })

  }

  buttonPickClick = (e) => {

    // console.log(e.target.value);
    let link = e.target.value.toString()
    // console.log(link);
    let linkToSend = link.split('https://www.youtube.com/watch?v=')[1]
    this.setState({
      clicked: !this.state.clicked,
      url: linkToSend,
      videoClickButton: !this.state.videoClickButton
    })

  }

  updateInfo = (e) => {
    e.preventDefault()
    this.props.removeResource(e.target.id, this.props)
    this.props.addToOldItemsApi(this.props)

  }



  addToOldItemsApi = () => {
    console.log(this.props.resource.dmatch_id);
    let oldTitle = this.props.resource.wrestling_name;
    let oldImage = this.props.resource.image_url;
    let oldLink = this.props.resource.source_link
    let oldDescription = 'no description'
    let oldObj = {title:oldTitle, description:oldDescription, link:oldLink, image:oldImage, ematch_id:this.props.resource.dmatch_id}


     fetch(`http://localhost:3001/api/v1/old_stuffs`, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json",
         Accept: "application/json"
       },
       body: JSON.stringify(oldObj)
     })
  }





  render(){
    // {this.state.clicked ? <div>({this.props.resource.source_link.slice(0,23) === 'https://www.youtube.com' ? <div> <YoutubeComponent height='100' width='100' url={this.state.url} /> </div> : null })</div> : null}



    let resourceCard =   <Card>
        {this.props.resource.source_link.slice(0,23) === 'https://www.youtube.com' ? (<div className='youtube-component'> {this.state.clicked ? <div> <YoutubeComponent height='700' width='700' url={this.state.url} /> <Image height='350' width='350' alt={this.props.resource.source_link} src={this.props.resource.image_url} ></Image> </div> : <Image  height='350' width='350' alt={this.props.resource.source_link} src={this.props.resource.image_url} ></Image>

    }</div>) : <Image height='350' width='350' alt={this.props.resource.source_link} src={this.props.resource.image_url} ></Image>}
        <br></br>
        <a href={this.props.resource.source_link} target='_blank'>{this.props.resource.wrestling_name}</a> <br></br> <br></br>
        {this.props.resource.source_link.slice(0,23) === 'https://www.youtube.com' ? (this.state.videoClickButton ? <Button color='blue' id={this.props.resource.id} onClick={this.buttonPickClick}  height='700' width='700' value={this.props.resource.source_link} >Take Away Vid</Button> :
         <Button color='blue' id={this.props.resource.id} onClick={this.buttonPickClick}  height='350' width='350' value={this.props.resource.source_link} >Check out Video</Button>)
      : null} <br></br>
      <Button color='red' id={this.props.resource.id} onClick={this.updateInfo}>Remove From Your Resources</Button>


      <br></br><br></br>


      </Card>
    //
    // console.log(this.props.resource.wrestling_name);
    //determine if something is video or notm oyt on div or img.then render with two conditonals
    return (
      <div className='resourcecard'>



      {resourceCard}

      <br></br><br></br>
      </div>
    )
  }
}
