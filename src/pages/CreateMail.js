import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Textarea from '@mui/joy/Textarea';
import './CreateMail.css'
import TextField from '@mui/material/TextField';

function CreateMail() {
  const[mail,setmail]=useState('');
  const[subject,setsubject]=useState('')
  const[message,setmessage]=useState('')
  function sendmail(event)
  {
axios.post("https://backend-mmt.onrender.com/sendEmail",{
  email:mail,subject:subject,text:message
}).then((res)=>console.log(res)).catch((err)=>console.log(err))
event.preventDefault();
  }
  return (
    // <div className='create-wrapper' >
    //   <div style={{backgroundColor:'white',marginTop:'100px'}}>
    // <div>
    // <Box
    //   sx={{
    //     width: 500,
    //     maxWidth: '100%',
    //   }}
    // >
    //   <TextField
    //     fullWidth
    //     label="Enter mail"
    //     id="fullWidth"
    //     value={mail}
    //     onChange={(e)=>setmail(e.target.value)}
    //   />
    // </Box>

    // </div>
    // <div>
    // <Box
    //   sx={{
    //     width: 500,
    //     maxWidth: '100%',
    //   }}
    // >
    //   <TextField
    //     fullWidth
    //     label="Enter subject"
    //     id="fullWidth"
    //     value={subject}
    //     onChange={(e)=>setsubject(e.target.value)}
    //   />
    // </Box>
    // </div>
    //  <div>
    //  <Box
    //   sx={{
    //     width: 500,
    //     maxWidth: '100%',
    //   }}
    // >
    //       <Textarea
    //       value={message}
    //       onChange={(e)=>setmail(e.target.value)}
    //   placeholder="Type the mail content here…"
    //   minRows={5}
    //   sx={{
    //     '&::before': {
    //       display: 'none',
    //     },
    //     '&:focus-within': {
    //       outline: '2px solid var(--Textarea-focusedHighlight)',
    //       outlineOffset: '2px',
    //     },
    //   }}
    // />

    // </Box>
    //  </div>
    //  </div>
    // </div>
  <>
  <div className="login-container">
  <form className="login-form">
    <h1>Welcome Back</h1>
    <p>Please enter mail id and message to send the mail</p>
    <div >
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Enter mail"
        id="fullWidth"
        value={mail}
        onChange={(e)=>setmail(e.target.value)}
      />
    </Box>
    </div>
    <div  style={{marginTop:'15px'}}>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Enter subject"
        id="fullWidth"
        value={subject}
        onChange={(e)=>setsubject(e.target.value)}
      />
    </Box>

    </div>
    <div style={{marginTop:'20px'}}>
    <Box
       sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
          <Textarea
          value={message}
          onChange={(e)=>setmessage(e.target.value)}
      placeholder="Type the mail content here…"
      minRows={5}
      sx={{
        '&::before': {
          display: 'none',
        },
        '&:focus-within': {
          outline: '2px solid var(--Textarea-focusedHighlight)',
          outlineOffset: '2px',
        },
      }}
    />

    </Box>
    </div>
    <button type="submit" style={{marginTop:'20px'}} onClick={sendmail}>Send</button>
 
  </form>
</div>

  </>
  )
}

export default CreateMail