import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function Signup() {
  

  return (
    <div className='login'>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='loginLogo'>Omobio</h1>
        </Link>

        <div className='loginContainer'>
            <h1>Sign up</h1>
            <form>

                <h5>Name</h5>
                <input type='text' />

                <h5>User Name</h5>
                <input type='text' />

                <h5>Email</h5>
                <input type='text' />

                <h5>Password</h5>
                <input type='password'/>

                <button className='loginSigninButton' type='submit' >Sign In</button>

            </form>
            <p>By signing-in you agree to Omobio'searchConditions of use &
                Sale. Please see our Privacy Notice, our Cookies Noticeand our Interest-Based Ads Notice.
            </p>
            
            <button className='loginSingupButton' >Create Your Account</button>
        </div>
    </div>
  )
}

export default Signup