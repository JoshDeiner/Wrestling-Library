import React from 'react';
import { link } from 'react-router-dom'


export default class LegendsCard extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>

        <a target="_" href={this.props.legend.highlights}>{this.props.legend.name}</a>
        <br></br><br></br>
        <br></br>





      </div>
    )
  }
}
