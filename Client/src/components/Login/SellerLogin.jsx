import  { useEffect, useRef } from "react"
import styles from "../../styles/sellerLogin.module.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addLoggedInUser } from '../../ReduxStore/userSlice.js'
import useLogin from '../../hooks/useLogin.js'

function SellerLogin() {
  const [login, response, error] = useLogin(false);
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.classList.add(styles.bodyBase);
    document.body.classList.add(styles.createAdBackground);

    return () => {
      document.body.classList.remove(styles.bodyBase);
      document.body.classList.remove(styles.createAdBackground);
    };
  }, []);

  useEffect(() => {
    console.log(response)
    if (!response) return;
    if (response.status == 200) {
      dispatch(addLoggedInUser(response.seller))
      navigate('/')
    }
    if (response.status == 404) {
      redirectSignup()
    }

  }, [response]);



  async function handleLogin(e) {
    console.log('clicked');
    e.preventDefault()
    await login(emailRef.current.value, passwordRef.current.value);
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
          <label htmlFor="signup" className={`${styles.slide} ${styles.signup}`} onClick={redirectSignup}>Signup</label>
          <div className={styles.sliderTab}></div>
        </div>

        <div className={styles.formInner}>
          <form className={styles.login} onSubmit={handleLogin}  >
            <div className={styles.field}>
              <input ref={emailRef} type="text" placeholder="Email Address" required />
            </div>
            <div className={styles.field}>
              <input ref={passwordRef} type="password" placeholder="Password" required />
            </div>
            <div className={styles.passLink}>
              <a href="#">Forgot password?</a>
            </div>
            <div className={`${styles.field} ${styles.btn}`}>
              <div className={styles.btnLayer}></div>
              <input type="submit" value="Login" />
            </div>
            <div className={styles.signupLink}>
              are you a user? <a onClick={() => navigate('/user-login')}>user login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
