import React from "react";
import styles from "./login.module.css";

function Login () {
  return (
    <div className={`${styles.wrapper} ${styles.loginWrapper}`}>
      <div className={styles.titleText}>
        <div className={styles.title}>Login Form</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.slideControls}>
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className={`${styles.slide} ${styles.login}`}>Login</label>
          <label htmlFor="signup" className={`${styles.slide} ${styles.signup}`}>Signup</label>
          <div className={styles.sliderTab}></div>
        </div>

        <div className={styles.formInner}>
          <form className={styles.login}>
            <div className={styles.field}>
              <input type="text" placeholder="Email Address" required />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Password" required />
            </div>
            <div className={styles.passLink}>
              <a href="#">Forgot password?</a>
            </div>
            <div className={`${styles.field} ${styles.btn}`}>
              <div className={styles.btnLayer}></div>
              <input type="submit" value="Login" />
            </div>
            <div className={styles.signupLink}>
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
