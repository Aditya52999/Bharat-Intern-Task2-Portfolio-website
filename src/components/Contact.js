import React from 'react'

export default function Contact(props) {
  return (
<>
<div className='container-contact' style={{backgroundColor:(props.mode==='light')?'':'#042743',color:(props.mode==='light')?'':'white',border:(props.mode==='light')?'':'2px solid white'}}>

         <h1>This is the Contact page where we can talk and share our ideas</h1>
         <div className='contact-details'>

          <fieldset style={{border:(props.mode==='light')?'2px solid grey':'2px solid white'}}>

          <legend >   <b>contact me </b></legend>

          
        
          <input type='text' placeholder='Enter your name' style={{padding:'8px'}}></input><br></br><span>Name</span><br/><br/>
          <input type='text' placeholder='Enter your email-id' style={{padding:'8px'}}></input><br></br><span>Email-id</span><br/><br/>
          <input type='email' placeholder='Enter the title of your query' style={{padding:'8px'}}></input><br></br><span>Title</span><br/><br/>
          <textarea placeholder='Enter the detailed description of the query' style={{padding:'8px'}}></textarea>
          <br></br><button style={{margin:'10px',padding:'10px',backgroundColor:(props.mode==='light')?'antiquewhite':'#042743',color:(props.mode==='light')?'darkorange':'white',border:(props.mode==='light')?'':'2px solid white'}}>Submit</button>    
          </fieldset>
         </div>
</div>
</>
  )
}
