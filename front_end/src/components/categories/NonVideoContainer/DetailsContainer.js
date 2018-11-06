import React from 'react'
import CoolMatchesContainer from './CoolMatchesContainer'
import ReturnNav from '../../Navigation/dropdown'
import NextPage from './NextPage'
import BadMatchContainer from './BadMatchContainer'


export default class DetailsContainer extends React.Component {

  state = {
    clickedItem: '',
    matches: []
  }





  render(){


    return (
      <div className='matches'>


        <ReturnNav />
        <NextPage />



    </div>
    )
  }
}
