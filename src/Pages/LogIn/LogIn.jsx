import React, { useState } from 'react'
import "./LogIn.scss"
import {FcGoogle} from "react-icons/fc"
import {GoMarkGithub} from "react-icons/go"
import { useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import { auth } from '../../util/firebase';

const LogIn = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState('test@email.com')
  const [password, setPassword] = useState('test123')
  const [isValid, setIsValid] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (isValid && password) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        navigate("/dashboard",{replace:true})
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handleGoogle=async(e)=>{
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
    .then((res) => {
      navigate("/dashboard")
      
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  }

  const handleGithub=async(e)=>{
    e.preventDefault();
    signInWithPopup(auth, githubProvider )
    .then((res) => {
      navigate("/dashboard")
      
    })
    .catch((error) => {
      console.error(error);
      return;
    });
  }



  return (
    <div className='loginContainer'>

      <div className='left'>
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
            <button onClick={handleGoogle} className='lato'> <i><FcGoogle/></i>Sign in with Google</button>
            <button onClick={handleGithub} className='lato'> <i><GoMarkGithub/></i> Sign in with Github</button>
          </div>

          {/* textfeilds and buttons */}
          <div className='textfields-and-buttons'>
            <form onSubmit={(e) => handleLogin(e)} className='textfields'>

              <div className='textfieldsWrapper' >
                <h3 className='lato' >Email address</h3>
                <input placeholder='test@email.com' type='email' required value={email} onChange={(e) => { setEmail(e.target.value),setIsValid(e.target.validity.valid) }} />
              </div>

              <div className='textfieldsWrapper' >
                <h3 className='lato' style={{ fontSize: "16px" }}>Password</h3>
                <input type='password' required value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>

              <h3 className='lato forgot-password' >Forgot password?</h3>

              <input type='submit' className='mont' value="Sign In" />

            </form>
          </div>

          <h3 className='lato register' >Don’t have an account? <span style={{ color: "#346BD4" }}>Register here</span></h3>



        </div>

      </div>

    </div >
  )
}

export default LogIn