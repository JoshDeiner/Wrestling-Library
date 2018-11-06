import React from 'react'
import './old.css'
import Item from './Item'

export default class OldItem extends React.Component {

  state = {
    names: []
  }

  mappedNames = () => {
    var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};


    let xxxx = uniqueArray(this.props.names)


    
    return <Item names = {xxxx} />
  }



  render() {

    return (
      <div className='olditems'>

        <br></br><br></br>
      {this.mappedNames()}

      </div>
    )
  }
}
