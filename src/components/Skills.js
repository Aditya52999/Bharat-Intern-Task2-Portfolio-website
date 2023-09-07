import React from 'react'

export default function Skills(props) {
  return (

    <>
      <br></br>
      <div className='skills-list' style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>
        <h1>This is the Skills or technologies that I know which are as follows</h1><br></br><br></br>
        <ol style={{ margin: 'auto' }}>
          <br></br>
          <h3 style={{fontSize:'2rem'}}>Programming Languages</h3>
          <br>
          </br><hr></hr>
          <br></br>
          <li style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>C <img src='https://tse2.mm.bing.net/th?id=OIP.cCoXGBgc8Lh2P2V73QBURQHaHa&pid=Api&P=0&h=180' ></img></li>
          <li style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>C++ <img src='https://tse3.mm.bing.net/th?id=OIP.VTMfdHx7rlyQSyX3JaSwxgHaIU&pid=Api&P=0&h=180' ></img></li>
          <li style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>Kotlin <img src='https://tse4.mm.bing.net/th?id=OIP.6hYDuRkdzjyvsDfWbvLR9wHaD4&pid=Api&P=0&h=180' ></img></li>
          <li style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>HTML <img src='https://tse3.mm.bing.net/th?id=OIP.ClAB5mLiB-7R-rsOYWV0JgHaEo&pid=Api&P=0&h=180'></img></li>
          <li style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>CSS <img src='https://tse3.mm.bing.net/th?id=OIP.t8LlCJIKEWi5TeqGdfoxHQHaJ3&pid=Api&P=0&h=180'></img></li>
          <h3 style={{fontSize:'2rem'}}>Libraries/Frameworks</h3>
          <hr></hr>
          <br></br>
          <li style={{ width:'20vw',backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>  AnKO</li>
          <li style={{ width:'20vw',backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>Kotline </li>
          <li style={{ width:'20vw',backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>Coroutines </li>
          <li style={{ width:'20vw',backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>RxKotlin</li>
          <li style={{ width:'20vw',backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '2px solid white' }}>klaxon</li>
        </ol>
      </div>
    </>
  )
}
