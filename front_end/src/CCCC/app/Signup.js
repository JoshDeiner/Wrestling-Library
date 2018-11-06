import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/user'
import { withRouter, Link } from 'react-router-dom'
import '../../stylesheets/Login.css'

class Signup extends React.Component {
  state = {
    username:'',
    password:'',
    password_confirmation:''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createUser(this.state, this.props.history)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <div className='login-container'>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Username...' type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
          <input placeholder='Password...'type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
          <input placeholder='Confirm password...'type='password' name='password_confirmation' value={this.state.password_confirmation} onChange={this.handleChange}/>
          <input type='submit' name='submit'/>
        </form>
        <div className='link'>( <Link to='/login'>login</Link> )</div>
      </div>

    )
  }
}

export default withRouter(connect(null, {createUser})(Signup))
