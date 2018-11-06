import React from 'react'
import NextPageList from './NextPageList'
import ReturnNav from '../../Navigation/dropdown'
import './NextPageContainer.css'

export default class NextPageContainer extends React.Component {

  // componentDidMount = () => {
  //   // fetch(`http://localhost:3001/api/v1/wres`)
  //   // .then(res => res.json()).then(res => console.log(json))
  // }

  state = {
    specificMatchData : [],
    clicked: null,
         url : "",
         pathClick: false,
         resourceTitle: '',
         resourceId: null,
         commentsClick: false,
         picId: '',
         popUpClick: false,
         propsImgClick: false
  }



  // componentDidMount = () => {
  //   console.log(this.props.pictureId);
  //   fetch(`https://wrestling-resources-api.herokuapp.com/api/v1/categories/6/matches/${this.props.pictureId}`)
  //   .then(res => res.json())
  //   .then(json => this.setState({
  //     specificMatchData: json
  //   }))
  // }

  render(){
    console.log('problems', this.state);
    console.log(this.props.mappedMatches);
    let defaultReturnValue = <div>
      <h1>{this.state.specificMatchData.title}</h1>

      <NextPageList user={this.props.user} mappedMatches={this.props.mappedMatches} match={this.props.match} specificMatchData={this.state.specificMatchData} />

    </div>
    //ideally should make return truth value be return card or nextpageitem

  return(
    <div className='nextpage'>
      {this.state.propsImgClick ? defaultReturnValue : defaultReturnValue }


    </div>
  )
}
}
