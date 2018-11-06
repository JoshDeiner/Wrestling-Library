import React from 'react'

import { Link } from 'react-router-dom'
import '../../../../stylesheets/Acknowledgments.css'
import RegularReturnNav from '../../../Navigation/dropdown'

const Acknowledgments = () => {



  return(

    <div className='her'>
      <RegularReturnNav />


      <br></br>

      <h1>Shout out to The Katy Carr</h1> Most of this would have been impossible without her help.
      Peep her <a href='https://github.com/katycarr' target="_blank">github</a> if you wanna see some rediculous clean code.

        <div>
        <Link to='further_acknowledgments'>Further Shoutouts</Link>
        </div>


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br>

</br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>

  )
}

export default Acknowledgments
