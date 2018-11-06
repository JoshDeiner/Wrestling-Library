import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../buttons/Logout'
// import '../stylesheets/Nav.css'
import '../../stylesheets/switchNav.css'
import { Dropdown, Menu } from 'semantic-ui-react'
import DropdownExamplePointingTwo from './dropdown'

const SwitchNav = (props) => {
  return(
    <div className="d">
      <div class="header">
</div>

<ul>



    <li><a href='/summer'>Off Season Resources</a></li>
  <li><a href='memorable_wrestlers'>Legends</a></li>
<li><a href='diet'>Nutritional Advice</a></li>
    <li><a href='books'>Books</a></li>
  <li><a href='acknowledgments'>Acknowledgments</a></li>

  <li><a href='chat'>Talk Wrastling</a></li>

    <li><Logout /></li>
    <li>

   </li>



</ul>

    </div>
  )
}

export default SwitchNav
