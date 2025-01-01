import React, {useEffect} from 'react'
import './Signup.css'
import logo from '../Img/logo.png'
import { Link } from 'react-router-dom'
  
const SignUp = () => {

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/')
    const data = await response.json()
    console.log(data);   
  }

   useEffect(() => {
    fetchData()
   },[]) 

  return (
    <div className='signUp'>
      <div className="form-container">
        <div className="form">
          <img className='signUpLogo' src={logo} alt="" />
          <p className='loginPara'>Signup to see photos and videos <br /> from your friends.</p>
          <div><input type='email' id='email' name='email' placeholder='Email' /></div>
          <div><input type='text' id='name' name='name' placeholder='Full Name' /></div>
          <div><input type='text' id='username' name='username' placeholder='Username' /></div>
          <div><input type='password' id='password' name='password' placeholder='Password' /></div>
          <p className='loginPara'>By signup up, you agree to out Terms, <br /> privacy policy and cookies policy.</p>
          <input type='submit' id='submit-btn' value="Sign Up" />
        </div>
        <div className="form2">
          Already have an account ?
          <Link to="/signin">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
