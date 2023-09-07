import React from 'react'
export default function Work(props) {
  return (
    <div>
      <div className='project1-calculator' style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '1px solid white' }}>


        <div className='project1-desc'>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Avenger's App</h2>
          <p style={{ marginBottom: 'revert' }}>
            This project is based on AVENGER where people can put
            their name; they and can interact with similar avenger,
            comments as well as save the post, and can follow the
            user.
            <br></br>
            <br></br>
            <b>Technologies used:</b>Kotlin, UI/ux, Android studio, Anko,
            Xml,
          </p>

        </div>
      </div>
      <br></br>

      <div className='project1-calculator' style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '1px solid white' }}>


        <div className='project1-desc'>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>FOODE Delivering App clone</h2>
          <p style={{ marginBottom: 'revert' }}> This project can find your desired food’s and can show you
            the recommended food's of the day and you can order them.
            <br></br><br></br>
            <b>Technologies used :</b> Xml, Kotlin, Klaxon ,
          </p>

        </div>
      </div><br></br>

      <div className='project1-calculator' style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '1px solid white' }}>
        <div className='project1-desc'>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}> LMS(library management system)</h2>
          <p style={{ marginBottom: 'revert' }}> This project help To indicate Where editor, enabling users
            to write There book number, and Serial number. It includes
            features like code auto-search, suggestions, and theme
            customization. Users can search their desire books see the
            output in a App and also download the books they want to
            download.
            <br></br>
            <br></br>
            <b>Technologies used: </b> Kotlin, Gradle, Xml.Sql
          </p>
        </div>
      </div>
      <div className='project1-calculator' style={{ backgroundColor: (props.mode === 'light') ? '' : '#042743', color: (props.mode === 'light') ? '' : 'white', border: (props.mode === 'light') ? '' : '1px solid white' }}>
        <div className='project1-desc'>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>  Attendance app</h2>
          <p style={{ marginBottom: 'revert' }}> This project aims to develop Kotlin and xml application that
allows users to search and view detailed instructions for
Attendance. Users can search for Previous month
attendance, in Office instructions, save attendance to
office admin panel, and view them later. The application
uses the Klaxon and database for retrieval
            <br></br>
            <br></br>
            <b>Technologies used: </b> Klaxon, Anko, Xml
          </p>
        </div>
      </div>
    </div>
  )
}
