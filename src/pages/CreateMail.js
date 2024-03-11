
import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Textarea from '@mui/joy/Textarea';
import './CreateMail.css';
import TextField from '@mui/material/TextField';
import Mail from '../services/sendMail';
import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';
function CreateMail() {
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [listening, setListening] = useState(false);
  const recognition = new window.webkitSpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = () => {
    console.log('Voice recognition started');
    setListening(true);
  };

  recognition.onend = () => {
    console.log('Voice recognition stopped');
    setListening(false);
  };

  recognition.onresult = event => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript += transcript;
      }
    }

    setMessage(finalTranscript);
  };

  const toggleListening = (e) => {
    if (listening) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setListening(prevState => !prevState);
    e.preventDefault()
  };

  function sendMail(event) {
    axios.post("https://backend-mmt.onrender.com/sendEmail", {
      email: mail, subject: subject, text: message
    }).then((res) => console.log(res)).catch((err) => console.log(err))
    event.preventDefault();
    Mail.send({
      sentMail: mail, subject: subject, mailData: message, receivedMail: mail
    })
  }

  return (
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
                onChange={(e) => setMail(e.target.value)}
              />
            </Box>
          </div>
          <div style={{ marginTop: '15px' }}>
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
                onChange={(e) => setSubject(e.target.value)}
              />
            </Box>

          </div>
          <div style={{ marginTop: '20px' }}>
            <Box
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            >
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
          <div style={{display:'flex'}}><button type="submit" style={{ marginTop: '20px',width:'90%' }} onClick={sendMail}>Send</button>
          <div onClick={toggleListening} style={{marginTop:'20px',marginLeft:'10px',paddingTop:'15px',paddingLeft:'15px',paddingRight:'15px',backgroundColor:'#007BFF',borderRadius:'100%'}}>
            {!listening ? <MicIcon/> : <MicOffIcon/>}
          </div>

          </div>
        </form>
      </div>

    </>
  )
}

export default CreateMail;


