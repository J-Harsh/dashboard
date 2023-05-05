import React, { useState } from 'react'
import "./LogIn.scss"
import AuthConsumer from '../../util/authContext';
import {  useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate=useNavigate();
  const [authed, dispatch] = AuthConsumer();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const checkInput=()=>{
    if(email && password)
      {
        dispatch({ type: "login"}),
        navigate('/dashboard',{replace:true});
      }
    else{
      setEmail("Enter any value to login");
      setPassword("");
    }
  }

  return (
    <div className='loginContainer'>

      <div  className='left'>
        <h1 className='mont'>Board.</h1>
      </div>

      <div className='right'>
        <div>
          {/* heading */}
          <div className='heading'>
            <h1 className='mont' >Sign In</h1>
            <h3 className='lato' >Sign in to you account</h3>
          </div>

          {/* button Container */}
          <div className='button-container'>
            <button className='lato'>Google</button>
            <button className='lato'>Apple</button>
          </div>

          {/* textfeilds and buttons */}
          <div className='textfields-and-buttons'>
            <div className='textfields'>

              <div className='textfieldsWrapper' >
                <h3 className='lato' >Email address</h3>
                <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
              </div>

              <div className='textfieldsWrapper' >
                <h3 className='lato' style={{ fontSize: "16px" }}>Password</h3>
                <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </div>

              <h3 className='lato forgot-password' >Forgot password?</h3>

              <button className='mont' onClick={checkInput} >Sign In</button>

            </div>
          </div>

          <h3 className='lato register' >Don’t have an account? <span style={{ color: "#346BD4" }}>Register here</span></h3>



        </div>

      </div>

    </div >
  )
}

export default LogIn