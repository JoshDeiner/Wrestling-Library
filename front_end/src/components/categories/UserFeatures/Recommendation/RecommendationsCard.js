import React from 'react'
import './Card.css'


export default class RecommendationsCard extends React.Component {




  render(){
    // console.log(this.props.review);
    return (
      <div className='card'>

        <h5 >{this.props.review}</h5>


      </div>
    )
  }
}
