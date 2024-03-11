











import './Home.css'
import * as React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InboxIcon from '@mui/icons-material/Inbox';
import SendIcon from '@mui/icons-material/Send';
import ReportIcon from '@mui/icons-material/Report';
import CreateIcon from '@mui/icons-material/Create';
import CreateMail from './CreateMail';
import receiveMail from '../services/getRecievedMail';
import sentMail from '../services/getSentMail'
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ textAlign: 'left' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function HomeComponent() {
  const [value, setValue] = React.useState(0);
  const [sentMaildata, setSentMaildata] = React.useState([]);
  const [inboxMail, setInboxMail] = React.useState([]);
  const [selectedEmailData, setSelectedEmailData] = React.useState(null); // State for selected email data
  const [open, setOpen] = React.useState(false);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchalldata = async () => {
    const val = await sentMail.send('venusubash.r@codingmart.com');
    setSentMaildata(val);
    const val2 = await receiveMail.send('venusubash018@gmail.com');
    setInboxMail(val2);
  };

  React.useEffect(() => {
    fetchalldata();
  }, []);

  const handleOpen = (val) => {
    setSelectedEmailData(val);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
    height:'100vh',
    bgcolor: 'background.paper',
    border: '10px solid grey',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{ display: 'flex', height: '100vh', width: '100vw' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', backgroundColor: 'black', color: 'white', width: '300px' }}
      >
       <Tab
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InboxIcon sx={{ mr: 2 }} />
              Inbox
            </Box>
          }
          {...a11yProps(0)}
        />
        <Tab
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SendIcon sx={{ mr: 2 }} />
              Sent
            </Box>
          }
          {...a11yProps(1)}
        />
        <Tab
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ReportIcon sx={{ mr: 2 }} />
              Spam
            </Box>
          }
          {...a11yProps(2)}
        />
        <Tab
          sx={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CreateIcon sx={{ mr: 2 }} />
              Compose
            </Box>
          }
          {...a11yProps(3)}
        />
      </Tabs>
      
      <TabPanel value={value} index={0}>
        <main id="main">
          <div className="overlay" />
          <header className="header">
          <h1>Inbox</h1> 
          </header>
          <div id="main-nano-wrapper" className="nano">
            <div className="nano-content">
              <ul className="message-list">
                {inboxMail.map((val, index) => (
                  <>
                    <li className="unread" key={index} onClick={() => handleOpen(val)}>
                      <div className="col col-1">
                        <p className="title">{val.sentMail}</p>
                      </div>
                      <div className="col col-2">
                        <div className="subject">
                          <span className="teaser" style={{marginLeft:'15px'}}>
                            {val.mailData}
                          </span>
                        </div>
                        <div className="date">11:49 am</div>
                      </div>
                    </li>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <h3>Sent:</h3>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.sentMail}
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <h3>Received:</h3>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.receivedMail}
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <h3>Subject:</h3>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.subject}
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <div style={{display:'flex'}}>
                          <h3>Message:  </h3>
                          <span className="speaker-icon" onClick={() => speak(selectedEmailData && selectedEmailData.mailData)}>
                            <VolumeDownIcon/>
                          </span>
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.mailData}
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </TabPanel>
      
         
      <TabPanel value={value} index={1}>
        <main id="main">
          <div className="overlay" />
          <header className="header">
          <h1>Sent</h1> 
          </header>
          <div id="main-nano-wrapper" className="nano">
            <div className="nano-content">
              <ul className="message-list">
                {sentMaildata.map((val, index) => (
                  <>
                    <li className="unread" key={index} onClick={() => handleOpen(val)}>
                      <div className="col col-1">
                        <p className="title">{val.receivedMail}</p>
                      </div>
                      <div className="col col-2">
                        <div className="subject">
                          <span className="teaser" style={{marginLeft:'15px'}}>
                            {val.mailData}
                          </span>
                        </div>
                        <div className="date">11:49 am</div>
                      </div>
                    </li>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <h3>Sent:</h3>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.sentMail}
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <h3>Received:</h3>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.receivedMail}
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <h3>Subject:</h3>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.subject}
                        </Typography>
                        <br/>
                        <hr/>
                        <br/>
                        <div style={{display:'flex'}}>
                          <h3>Message:  </h3>
                          <span className="speaker-icon" onClick={() => speak(selectedEmailData && selectedEmailData.mailData)}>
                            <VolumeDownIcon/>
                          </span>
                        </div>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {selectedEmailData && selectedEmailData.mailData}
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </TabPanel>
     
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
       <CreateMail/>
      </TabPanel>
     
    </Box>
  );
}
