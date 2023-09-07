import Body from './components/Body'
import { useState } from 'react'
import Navbar from './components/Navbar';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import { Routes,Route } from 'react-router-dom';
import './App.css'

function App() {
  const[mode,setMode]=useState('light');
  const[text,setText]=useState('Enable the dark mode');
  function togglemode() {
    if (mode=='light') {
      setMode('dark')
      setText('Enable the light mode')
      document.body.style="background-color:#042743"
      // document.body.style="color:white"
    }else {
      setMode('light')
      setText('Enable the dark mode')
      document.body.style="background-color:white"
      //document.body.style="color:black"
    }
  }
  return (
    <>
      <Navbar mode={mode} setmode={togglemode} text={text}></Navbar>
      <br></br>
      <Routes>
        <Route exact path='/' Component={()=>{return <Body mode={mode}></Body>}}></Route>
        <Route exact path='/skills' Component={()=>{return <Skills mode={mode}></Skills>}}></Route>
        <Route exact path='/work' Component={()=>{return<Work mode={mode}></Work>}}></Route>
        <Route exact path='/about' Component={()=>{return<About mode={mode}></About>}}></Route>
        <Route exact path='/contact' Component={()=>{return <Contact mode={mode}></Contact>}}></Route>
      </Routes>

    </>
  );
}

export default App;