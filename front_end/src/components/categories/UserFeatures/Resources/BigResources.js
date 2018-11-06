import React from 'react'
import RegularReturnNav from '../../../Navigation/dropdown'
import ResourcesContainer from './ResourcesContainer'
import './Resources.css'


export default class BigResources extends React.Component {


  render(){
    return (
      <div className='bigResources'>

        <RegularReturnNav />
        <ResourcesContainer />


      </div>
    )
  }
}
