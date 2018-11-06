import React from 'react'
import ReturnNav from '../../../Navigation/dropdown'
import './RecommendationsContainer.css'
import RecommendationsContainer from './RecommendationsContainer'

export default class BigTechContainer extends React.Component {


  render(){
    return (
      <div className='BigTechContainer'>
        <ReturnNav />
        <RecommendationsContainer />

      </div>
    )
  }
}
