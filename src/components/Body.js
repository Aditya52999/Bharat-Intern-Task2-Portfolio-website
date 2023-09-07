import React from 'react'
import logo from '../IMG-20230905-WA0012.jpg'
export default function Body(props) {
  return (

    <>
      <div className='body-container' style={{ backgroundColor: (props.mode === 'light') ? 'antiquewhite' : '#042743', color: (props.mode === 'light') ? 'darkorange' : 'white' }}>

        <div className='body' style={{ backgroundColor: (props.mode === 'light') ? 'antiquewhite' : '#042743', color: (props.mode === 'light') ? 'darkorange' : 'white' }}>
          <div className='body-logo'>
            <img src={logo} height='350px' style={{ borderRadius: '35%', border: '2px solid brown' }}></img>
          </div>
          <div className='body-content'>

            <p>Hello how are you ??</p>
            <p> I am Aditya Singh Diwakar</p>
            <p>Web Developer</p>
                    </div>
        </div>

        <hr></hr>
        <br></br>
        <div className='body2' style={{ marginLeft: '2%', backgroundColor: (props.mode === 'light') ? 'antiquewhite' : '#042743', color: (props.mode === 'light') ? 'cadetblue' : 'white' }}>
          <br></br>
          <h3>These are the options where we can share our idea and contact with me</h3>
          <br></br>
          <br></br>

          <hr></hr>

          <ol className='text-style-none'>

            <li><a href='https://github.com/Aditya52999' style={{ color: (props.mode === 'light') ? '' : 'white' }} target='_blank'>Github</a><img src="https://tse4.mm.bing.net/th?id=OIP.8SVgggxQcO5L6Dw_61ac4QHaEK&pid=Api&P=0&h=180" height="50px" /></li>
            <li><a href='https://www.linkedin.com/in/aditya-singh-diwakar-3bb15525a/' style={{ color: (props.mode === 'light') ? '' : 'white' }} target='_blank'>Linked-in</a><img src="https://tse3.mm.bing.net/th?id=OIP.x0YtDAmlVimvaHtAUvUjngHaFQ&pid=Api&P=0&h=180" height="50px" /></li>
            
          </ol>
        </div>
      </div>
    </>
  )
}
