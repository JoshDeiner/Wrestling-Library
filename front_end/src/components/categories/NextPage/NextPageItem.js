import React from 'react'
import { Link } from 'react-router-dom'


export default class NextPageItem extends React.Component {


  state = {
    nextPageItems: []
  }


  render(){
    console.log(this.props);

    // console.log('id', this.props.match.id);

    return (
      <div>
        <Link to={this.props.data.title}>dkdjkd</Link>

        {this.props.data.title}

        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
      </div>
    )
  }
}
