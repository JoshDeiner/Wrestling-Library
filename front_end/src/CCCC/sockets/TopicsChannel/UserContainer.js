import React from 'react'
import { connect } from 'react-redux'
import withAuth from '../../../hocs/withAuth'
import {getUser} from '../../../actions/user'
import ConversationList from './ConversationList'
import RegularReturnNav from '../../../components/Navigation/dropdown'

class UserContainer extends React.Component {

  render() {
    return(

        <div className='home'>
          <RegularReturnNav />

        <ConversationList user={this.props.user} />
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  }
}

export default connect(mapStateToProps, {getUser})(withAuth(UserContainer))
