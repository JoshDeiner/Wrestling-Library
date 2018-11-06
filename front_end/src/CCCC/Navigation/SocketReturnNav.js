import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../buttons/Logout'
import '../../stylesheets/Nav.css'

const RegularReturnNav = (props) => {
  return(
    <div className="nav">
      <div className='inner-nav'>
          <Link to='/'>Home</Link>
          <Link to='resources'>Your Resouces</Link>
          <Link to='chat'>Return to Chat Forum</Link>
      </div>
    </div>
  )
}

export default RegularReturnNav
