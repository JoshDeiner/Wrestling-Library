import React from 'react'
import YoutubeComponent from '../YoutubeFunctionality/YoutubeComponent'

export default class NextPage extends React.Component {


  state = {
    clicked: false
  }


  handleClick = (e) => {
    e.preventDefault();
    console.log('d');
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    console.log(this.props);
    // console.log(this.state.clicked);




    return (
      <div className='nextpage'>
        {this.state.imageClicked ?
          <div><img src={this.props.match.image} alt={this.props.match.link} width='340' height='340'></img></div>
           :
           <div><img src={this.props.match.image} alt={this.props.match.link} width='340' height='340'></img></div>
          }
        {this.props.match.title}
        <button onClick={this.handleClick}>Add Video to your Resources</button>
      </div>
    )
  }
}
