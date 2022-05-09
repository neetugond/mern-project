import React from 'react'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

// import {Item} from '@mui/material'

const Contact = () => {
  return (
      <div className='contact-main-div'>
          <h4>Get in Touch</h4>
          <div className="contact-detail-fill-div">
              <div className="contact-input">
              <input type="text" name="" id="" placeholder='your name' />
                  <input type="text" name="" id="" placeholder='your email' />
                  <input type="text" name="" id="" placeholder='your phone number' />
              </div>
              <Box
                  sx={{
                      width: 560,
                      height: 300,
                      border: 1,
                      borderRadius: 2,
                      marginTop: 2
                  }} 
              > <p>type you message here...</p></Box>
              <Button variant='outlined'>Send message</Button>

          </div>
          <div className="contact-detail-div">
              <div className="contact-sub-detail">
                  <span className='contact-icon'> <EmailIcon/> <span>abc@gmail.com</span> </span>
              </div>
              <div className="contact-sub-detail">
                  <span className='contact-icon'> <LocalPhoneIcon/> <span>999999999</span> </span>
              </div>
              <div className="contact-sub-detail">
                  <span className='contact-icon'> <HomeIcon/> <span>Mumbai, Maharashtra</span> </span>
              </div>
          </div>

       </div>
  )
}

export default Contact