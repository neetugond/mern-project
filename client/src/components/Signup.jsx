import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PasswordIcon from '@mui/icons-material/Password';

const Signup = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""

    });

    let name;
    let value;

    const handleInputs = (e) => {
        // console.log('e:', e)
        name = e.target.name;
        value = e.target.value;
        
        setUser({...user, [name]:value})
    }

  return (
      <div className='signup-main-div'>
          <h4>
              Create your account
          </h4>
          <div className="sigup-sub-div">

              
              <div className='signup-input-div'>
                  <span className='signup-icon'><AccountCircleIcon/></span>
                  <input value={user.name} onChange={handleInputs}  type="text" placeholder='Enter your name' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'> <EmailIcon/></span>
                  <input value={user.email} onChange={handleInputs} type="text" placeholder='Enter your email' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'> <LocalPhoneIcon/></span>
                  <input value={user.phone} onChange={handleInputs}  type="text" placeholder='Enter your mobile no.' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'><PasswordIcon/></span>
                  <input value={user.password} onChange={handleInputs}  type="text" placeholder='create password' />
              </div>
              <div className='signup-input-div'>
                  <span className='signup-icon'><PasswordIcon/></span>
                  <input value={user.cpassword} onChange={handleInputs}  type="text" placeholder='confirm password' />
              </div>

          </div>
          <Button variant='outlined'>Register</Button>
          <div className="signup-login-main">
          <NavLink to='/login' className='signup-login'>I am already register</NavLink>
          </div>
         
          
    </div>
  )
}

export default Signup