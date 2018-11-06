import React from 'react'


export default class PopUp extends React.Component {

  // componentDidMount = () => {
  //   // fetch(`http://localhost:3001/api/v1/wres`)
  //   // .then(res => res.json()).then(res => console.log(json))
  // }

  state = {
    specificMatchData : []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3001/api/v1/special_matches/${this.props.pictureId}`)
    .then(res => res.json())
    .then(json => this.setState({
      specificMatchData: json
    }))
  }

  render(){
    console.log(this.props);

  return(
    <div>
      hey josh
      <button>Add to Resources</button>
      <button>Check out Comments</button>
    </div>
  )
}
}
