import React from 'react'


export default class NextPageItem extends React.Component {


  state = {
    nextPageItems: []
  }


  render(){
    console.log(this.props);
    return (
      <div>

        {this.props.data.title}
      </div>
    )
  }
}
