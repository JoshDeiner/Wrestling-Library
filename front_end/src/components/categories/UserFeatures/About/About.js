import React from 'react'
import './About.css'
import ReturnNav from '../../../Navigation/dropdown'
import ReactDOM from 'react-dom';

const About = () => {
  let xxx = <div><h1>d</h1></div>
  

  return(
    <div className='about'>
    <ReturnNav />
    <h4>This Web Application is intended to be an open resource in which new Wrestlers will be able to find a guide to entering the sport.</h4>
    <h4>Guide is used in the most general term as I cannot say that I am expert.</h4>
    <h4>Please Peruse the site and add any items that you think are cool to your resources page</h4>
    <h4>Additionally this page is intended to be an growing medium for developer tools.</h4>
    <h4>I am in the process of developing an API in which other interested parties may use for their projects or other means</h4>

    </div>
  )
}

export default About
