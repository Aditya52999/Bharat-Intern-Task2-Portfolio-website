import React from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom'
export default function Navbar(props) {
  function show() {
    let x = document.getElementsByClassName('nav-links')[0]
    if (x.className === 'nav-links') {
      x.className += " responsive";
  }
  else {
      x.className = 'nav-links';
  }
  
    
  }
  return (
    <div className='navbar' style={{backgroundColor:(props.mode==='light')?'darkblue':'#042743',color:(props.mode==='light')?'darkorange':'white'}}>
      <h3 className='nav-heading'>Aditya Singh Diwakar</h3>
      <div className='nav-links'>

        <NavLink to="/" style={{backgroundColor:(props.mode==='light')?'springgreen':'#042743',color:(props.mode==='light')?'orangered':'white',border:(props.mode==='light')?'':'1px solid white'}}>Home</NavLink>
        <NavLink to="/about" style={{backgroundColor:(props.mode==='light')?'springgreen':'#042743',color:(props.mode==='light')?'orangered':'white',border:(props.mode==='light')?'':'1px solid white'}}>About</NavLink>
        <NavLink to="/work" style={{backgroundColor:(props.mode==='light')?'springgreen':'#042743',color:(props.mode==='light')?'orangered':'white',border:(props.mode==='light')?'':'1px solid white'}}>Work</NavLink>
        <NavLink to="/skills" style={{backgroundColor:(props.mode==='light')?'springgreen':'#042743',color:(props.mode==='light')?'orangered':'white',border:(props.mode==='light')?'':'1px solid white'}}>Skills</NavLink>
        <NavLink to="/contact" style={{backgroundColor:(props.mode==='light')?'springgreen':'#042743',color:(props.mode==='light')?'orangered':'white',border:(props.mode==='light')?'':'1px solid white'}}>Contact us</NavLink>
      </div>
      <button id="hidden" onClick={show}><img src="https://tse3.mm.bing.net/th?id=OIP.eQDSOvXEZN6RHnbA6yP7CQHaHa&pid=Api&P=0" height="30px" /></button>
      <button onClick={props.setmode} style={{padding:'5px',marginRight:'5vw',fontSize:'inherit'}}>{props.text}</button>
    </div>
  )
}
