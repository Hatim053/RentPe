import React, { useRef, useEffect, } from "react"
import styles from "../../styles/userLogin.module.css"
import { useDispatch, } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addUser } from '../../ReduxStore/userSlice.js'
import useLogin from '../../hooks/useLogin.js'

function UserLogin() {

  const [login, response, error] = useLogin(true)
  const dispatch = useDispatch()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault();
    await login(emailRef.current.value, passwordRef.current.value);

  }

  function redirectSignup() {
    navigate('/user-signup')
  }

  useEffect(() => {
    document.body.classList.add(styles.bodyBase);
    document.body.classList.add(styles.createAdBackground);

    return () => {
      document.body.classList.remove(styles.bodyBase);
      document.body.classList.remove(styles.createAdBackground);
    };
  }, []);
  useEffect(() => {
    if (!response) return;
    if (response.status === 201) {
      dispatch(addUser(response.user));
      navigate('/');
    }
    if (response.status === 401) redirectSignup();

  }, [response]);

  return (
    <div className={`${styles.wrapper} ${styles.loginWrapper}`}>
      <div className={styles.titleText}>
        <div className={styles.title}>User-Login</div>
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
            <div className={styles.signupLink}>are you a seller?
              <a href="#" onClick={() => navigate('/seller-login')}> Seller login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
