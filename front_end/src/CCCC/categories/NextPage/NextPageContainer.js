import React from 'react'
import NextPageList from './NextPageList'
import ReturnNav from '../../Navigation/dropdown'
import { Redirect } from 'react-router-dom'
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


    testClick = (e) => {
      // console.log(e);
      let link = e.target.alt.toString()
      let linkToSend = link.split('https://www.youtube.com/watch?v=')[1]
      this.setState({
        clicked: !this.state.clicked,
        url: linkToSend,
        picId: e.target.id
      })
    }

  componentDidMount = () => {

    fetch(`http://localhost:3001/api/v1/special_matches/${this.props.pictureId}`)
    .then(res => res.json())
    .then(json => this.setState({
      specificMatchData: json
    }))
    if(this.props.match.id === 1) {
      <Redirect to='/1' />
    }
  }

  render(){
    console.log(this.props.match.id);
    let defaultReturnValue = <div>
      <h1>{this.state.specificMatchData.title}</h1>


      <NextPageList getMatchId={this.props.getMatchId} mappedMatches={this.props.mappedMatches} match={this.props.match} specificMatchData={this.state.specificMatchData} />

    </div>
    // //ideally should make return truth value be return card or nextpageitem
    // {this.props.match.id === 1 ? `<Redirect to = /${this.props.match.id}/>` : null}
    // {this.props.match.id === 2 ? <Redirect to ='/specialMatches/2'/> : null}
    //
    // {this.props.match.id === 3 ? <Redirect to ='/specialMatches/3'/> : null}
    //
    // {this.props.match.id === 4 ? <Redirect to ='/specialMatches/4'/> : null}
    //
    // {this.props.match.id === 5 ? <Redirect to ='/specialMatches/5'/> : null}
    //
    // {this.props.match.id === 6 ? <Redirect to ='/specialMatches/6'/> : null}

  return(
    <div className='nextpage'>
      {this.state.propsImgClick ? defaultReturnValue : defaultReturnValue }





    </div>
  )
}
}
