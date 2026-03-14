import styles from "../../styles/userSignup.module.css"
import { useRef , useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import useSignup from "../../hooks/useSignup.js"



function UserSignup() {
const [signup , response , error] = useSignup(true);

    useEffect(() => {
   
    document.body.classList.add(styles.bodyBase);
    document.body.classList.add(styles.createAdBackground);

 
    return () => {
      document.body.classList.remove(styles.bodyBase);
      document.body.classList.remove(styles.createAdBackground);
    };
  }, []);
  useEffect(() => {
    if(!response) return;
     if(response.status == 201 || response.status == 401) {
redirectLogin()
  } 
  } , [response])
  
const usernameRef = useRef(null)
const emailRef = useRef(null)
const passwordRef = useRef(null)
const navigate = useNavigate()

 async function handleSignup(e) {
    e.preventDefault()
    await signup(usernameRef.current.value , emailRef.current.value , passwordRef.current.value)
} 

function redirectLogin() {
  navigate('/user-login')
}

  return (


    <div className={styles.wrapper}>
      <div className={styles.titleText}>
        <div className={styles.title}>Register User</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formInner}>
          <form className={styles.signup} onSubmit={handleSignup}>

            <div className={styles.field}>
              <input ref={emailRef} type="email" placeholder="Email Address" required />
            </div>

            <div className={styles.field}>
              <input ref={usernameRef} type="text" placeholder="Username" required />
            </div>

            <div className={styles.field}>
              <input ref={passwordRef} type="password" placeholder="Password" required />
            </div>

            <div className={`${styles.field} ${styles.btn}`}>
              <div className={styles.btnLayer}></div>
              <input type="submit" value="Signup" />
            </div>

            <div className={styles.signupLink}>
              Already have an account? <a onClick = {redirectLogin}>Login now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
