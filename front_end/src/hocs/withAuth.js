import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../actions/user'

function withAuth(WrappedComponent) {
  class AuthComponent extends React.Component {
    state = {
      authDone: this.props.loggedIn
    }

    componentDidMount() {
      if(localStorage.getItem('token') && !this.props.user) {
        this.props.getUser();
      } else {
        this.setState({ authDone: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authDone: true });
      }
    }

    render() {
      if(this.state.authDone) {
        return this.props.user ? <WrappedComponent {...this.props} /> : <Redirect to='/login'/>
      } else {
        return <div>LOADING</div>
      }
    }
  }

  function mapStateToProps(state) {
    return {
      loggedIn: !!state.authentication.user,
      user: state.authentication.user
    }
  }

  return connect(mapStateToProps, {getUser})(AuthComponent)
}



export default withAuth
