import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
  

  return (
    <div className='login'>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='loginLogo'>Omobio</h1>
        </Link>

        <div className='loginContainer'>
            <h1>Sign in</h1>
            <form>

                <h5>Email</h5>
                <input type='text' />

                <h5>Password</h5>
                <input type='password'/>

                
                <Link to="/login" className="btn btn-primary"><button className='loginSigninButton' type='submit' >Sign In</button></Link>

            </form>

            <p>By signing-in you agree to Omobio'searchConditions of use &
                Sale. Please see our Privacy Notice, our Cookies Noticeand our Interest-Based Ads Notice.
            </p>
            <Link to="/signup" className="btn btn-primary"><button className='loginSingupButton' >Create Your Account</button></Link>
        </div>
    </div>
  )
}

export default Login