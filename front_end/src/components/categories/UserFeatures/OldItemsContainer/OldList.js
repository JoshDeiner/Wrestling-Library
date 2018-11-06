import React from 'react'
import OldItem from './OldItem'
import './old.css'

class OldList extends React.Component {

  state = {
    arrayHold: []
  }

  mapArray = () => {
    let mArray = []
    for (let i = 0; i < this.props.oldstuff.length; i++) {
      let iterator = this.props.oldstuff[i];

        mArray.push(iterator.title)



      if (i === this.props.oldstuff.length) {
        return <OldItem mapArray={this.mapArray} arrayCheck={mArray} oldstuff={this.props.oldstuff} />

      }



    }
    return <OldItem names ={mArray}/>


  }








  render(){

    let filteredItems = this.props.oldstuff.filter(old => {
      return old.title.indexOf(this.props.oldstuff) !== 1
    })

    let mapOldies = filteredItems.map(old => {
      let arrayHold = []

        arrayHold.push(old.title)









      return <OldItem mapArray={this.mapArray} oldstuff={this.props.oldstuff} old={old} key={old.id}/>
    })
    // {mapOldies}

    // {mapOldies}

    return (
      <div className='older'>
        {this.mapArray()}

      </div>
    )
  }

}

export default OldList
