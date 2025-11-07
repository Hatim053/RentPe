import React from "react";
import styles from "./userSignup.module.css";

function UserSignup() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleText}>
        <div className={styles.title}>Register User</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formInner}>
          <form className={styles.signup}>

            <div className={styles.field}>
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className={styles.field}>
              <input type="text" placeholder="Username" required />
            </div>

            <div className={styles.field}>
              <input type="password" placeholder="Password" required />
            </div>

            <div className={`${styles.field} ${styles.btn}`}>
              <div className={styles.btnLayer}></div>
              <input type="submit" value="Signup" />
            </div>

            <div className={styles.signupLink}>
              Already have an account? <a href="#">Login now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
