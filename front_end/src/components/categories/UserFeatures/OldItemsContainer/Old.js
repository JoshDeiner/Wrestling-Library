import React from 'react'
import OldList from './OldList'
import RegularReturnNav from '../../../Navigation/dropdown'
import './old.css'
import { connect } from 'react-redux'
import { CategoryIdRetrievalSuccess } from '../../../../actions/user'
import {Route, withRouter} from 'react-router-dom'

class Old extends React.Component {



  state = {
    oldItems: []
  }

  componentDidMount = () => {
    let realPath = this.props.location.pathname
    let path = this.props.categoryId

    if(this.props.categoryId.length > 5) {
      fetch(`http://localhost:3001/api/v1/${path}`)
      .then(res => res.json())
      .then(json => this.setState({oldItems: json}))

    } else {
      fetch(`http://localhost:3001/api/v1/${realPath}`)
      .then(res => res.json())
      .then(json => this.setState({oldItems: json}))

    }

  }

  render(){



    return (

      <div className='old'>
        <RegularReturnNav/>

        <h1>Previously Checked Out Resources</h1>

        <OldList oldstuff={this.state.oldItems} />

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categoryId: state.fetchCategoryData
  }
}



export default withRouter(connect(mapStateToProps, {CategoryIdRetrievalSuccess})(Old))
