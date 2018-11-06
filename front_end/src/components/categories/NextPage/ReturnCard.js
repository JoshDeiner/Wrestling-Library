import React from 'react'


export default class ReturnCard extends React.Component {

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
    imgClick: false

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

  changeToNext = (e) => {
    console.log('clicked')
    this.setState({
      imgClick : !this.state.imgClick
    })
    this.props.checkImgClick(this.state.imgClick)
  }


  render(){
    console.log('yes');

    return (
      <div>


        <div onClick={this.changeToNext}><img  src={this.props.match.image} src={this.props.match.image} width='300' height='300'></img></div><br></br>
        {this.props.match.title} <br></br>
        {this.props.match.description}

        <div>
          {this.state.imgClick ? console.log('img clicked') : console.log('img not clicked')}

        </div>



      </div>
    )
  }
}
