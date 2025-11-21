import React, { useEffect, useRef, useState } from "react"
import styles from "./sellerLogin.module.css"
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addUser } from '../../../user/userSlice.js'

function SellerLogin () {


const emailRef = useRef(null)
const passwordRef = useRef(null)

const navigate = useNavigate()
const dispatch = useDispatch()



function handleLogin() {
return async(e) => {
e.preventDefault()
  let response = await fetch('http://localhost:5000/seller/login' , {
    method : 'POST',
    headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
  body : JSON.stringify({
  email : emailRef.current.value,
  password : passwordRef.current.value,
  })
  })
  let data = await response.json()
   if(data.status == 200) {
    dispatch(addUser(data.seller))
    navigate('/home')
  } 
  if(data.status == 404) {
    redirectSignup()
    
  }
}  
}

function redirectSignup() {
  navigate('/seller-signup')
}

  return (
    <div className={`${styles.wrapper} ${styles.loginWrapper}`}>
      <div className={styles.titleText}>
        <div className={styles.title}>Seller-Login</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.slideControls}>
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className={`${styles.slide} ${styles.login}`}>Login</label>
          <label htmlFor="signup" className={`${styles.slide} ${styles.signup}`} onClick = {redirectSignup}>Signup</label>
          <div className={styles.sliderTab}></div>
        </div>

        <div className={styles.formInner}>
          <form  className={styles.login} onSubmit = {handleLogin()}  >
            <div className={styles.field}>
              <input ref = {emailRef} type="text" placeholder="Email Address" required />
            </div>
            <div className={styles.field}>
              <input ref = {passwordRef} type="password" placeholder="Password" required />
            </div>
            <div className={styles.passLink}>
              <a href="#">Forgot password?</a>
            </div>
            <div className={`${styles.field} ${styles.btn}`}>
              <div className={styles.btnLayer}></div>
              <input type="submit" value="Login"/>
            </div>
            <div className={styles.signupLink}>
              Not a member? <a onClick= {redirectSignup}>Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
