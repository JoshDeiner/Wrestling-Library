import React from 'react'
// import ArticleContainer from '../articles/ArticleContainer'
import { connect } from 'react-redux'
import withAuth from '../../hocs/withAuth'
import {getUser} from '../../actions/user'
import Page from './Page'
import Nav from '../Navigation/dropdown'
import './Home.css'
import Dropdown from '../Navigation/dropdown'

class HomeContainer extends React.Component {

  render() {
    return(

        <div className='home'>
          <br></br><br></br><br></br><br></br><br></br><br></br>

          <Page withFilters={true}>
           </Page>
           <br></br><br></br><br></br><br></br>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {

    user: state.authentication.user,
  }
}

export default connect(mapStateToProps, {getUser})(withAuth(HomeContainer))
