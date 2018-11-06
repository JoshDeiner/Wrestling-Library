import React from 'react'
import ChosenItem from './ChosenItem'

export default class Item extends React.Component {

  render() {
    let selectNames = this.props.names.map(name => {
      return <ChosenItem name={name} key={name.id} />
    })
    return (
      <div>


        {selectNames}



      </div>

    )
  }
}
