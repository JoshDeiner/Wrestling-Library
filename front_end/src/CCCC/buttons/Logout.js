import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'

class Logout extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.logout()
  }

  render() {
    return(
      <a onClick={this.logout}>Logout</a>
    )
  }
}

export default connect(null, {logout})(Logout)
