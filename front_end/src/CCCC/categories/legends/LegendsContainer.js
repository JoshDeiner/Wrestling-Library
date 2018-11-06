import React from 'react'
import Api from '../../../constants/api'
import LegendsList from './LegendsList'
import './legends.css'

class LegendsContainer extends React.Component {

  state = {
    legends: [],

  }


  componentDidMount = () => {
    let apiString = `${Api}4/legends`;



    fetch(apiString)
    .then(res => res.json())
    .then(json => this.setState({
      legends: json
    }))


  }

  render(){


  return (
    <div className='legends'>
      <LegendsList legends={this.state.legends} />
        </div>
      )

    }


}






export default ( LegendsContainer)
