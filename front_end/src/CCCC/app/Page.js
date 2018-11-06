import React from 'react'
import { Link } from 'react-router-dom'
import '../../stylesheets/Page.css'
import YoutubeComponent from '../categories/YoutubeFunctionality/HighlightVideo'
import VideoComponent from '../categories/YoutubeFunctionality/YoutubeComponent'

import SwitchNav from '../../components/Navigation/switchNav'
import Dropdown from '../../components/Navigation/dropdown'
import '../../stylesheets/switchNav.css'

const Page = (props) => {

  let bookClick= () => {
    console.log('click');
  }


  return(
    <div className='page'>
      <Dropdown />



      <br></br><br></br><br></br><br></br>
      <br></br>
      <div className='showitems'>
        <br></br>


        <div class="grid-container">

      <div class="grid-item"><Link to='specialMatches'>Toss out your Concerns</Link>
      <div> </div> <br></br>
  <br></br>

<VideoComponent width='250' height='300' url={'NG_LmEDmE8I'}/>
  </div>
      <div class="grid-item"><a href='https://nwhof.org/products-page/books/historical/the-history-of-collegiate-wrestling/' target="_blank">Get Educated</a>
      <br></br> <br></br> <br></br>
        <div>
      <img onClick={bookClick} src='https://nwhof.org/wp-content/uploads/2017/11/History-of-Wrestling.jpg' alt='cool wrestling book' width='250' height='400'/>
      </div>
</div>
    <div class="grid-item"><Link to='hype'>Feel The Hype</Link> <br></br> <br></br><br></br>
    <div>

      <VideoComponent width='250' height='400' url='X0JMpBuY0Zc'/>
      </div>

      </div>

    </div>


      </div>
      <div className='yay'> d</div>      <div className='yay'> d</div>
        <div className='yay'> d</div>
          <div className='yay'> d</div>
            <div className='yay'> d</div>









    </div>
  )
}

export default Page
