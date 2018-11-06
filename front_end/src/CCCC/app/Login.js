import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user'
import { withRouter, Link } from 'react-router-dom'
import '../../stylesheets/Login.css'

class Login extends React.Component {
  state = {
    username:'',
    password:''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state, this.props.history)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div className='login-container'>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Username...' type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
          <input placeholder='Password...' type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
          <input type='submit' name='submit'/>
        </form>
        <div className='link'>( <Link to='/signup'>signup</Link> )</div>
      </div>
    )
  }
}

export default withRouter(connect(null, {loginUser})(Login))
