import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../../../../hocs/withAuth'
import {getUser} from '../../../../actions/user'
import CommentsContainer from './CommentsContainer'

class UserCommentsContainer extends React.Component {

  render() {
    // console.log(this.props.user);
    // console.log(this.props.user);
    return(

        <div className='home'>
        <CommentsContainer matchCategory={this.props.match} matchId={this.props.matchId} user={this.props.user} />
        </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {

    user: state.authentication.user
  }
}

export default connect(mapStateToProps, {getUser})(withAuth(UserCommentsContainer))
