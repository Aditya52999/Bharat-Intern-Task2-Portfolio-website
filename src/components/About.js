import React from 'react'
import logo from '../res.PNG'
export default function About(props) {
  return (
    <div className='container-about' style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white' }}>
      <i className='font'>


        Hello I am Aditya Singh Diwakar Web Developer I am pursing B.Tech from BIT Raipur college currently in 4th year.
        I am active listener,patience and team player. 
      </i>
      <hr></hr>
      <div className='about-logo' style={{ marginLeft: '40%' }}>

      </div>
      <hr></hr>
      <i className='font'>

        For further details given below is my resume you can see that:-
        <br></br>
      </i>
      <img className='about-resume' src={logo} ></img>
    </div>

  )
}
