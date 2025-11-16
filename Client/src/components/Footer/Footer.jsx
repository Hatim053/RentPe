import React from "react"
import styles from './footer.module.css'

function Footer() {


    return (
        <>
          <footer className = {styles.footer}>
  <div  className = {styles.footerContainer}>
    <div className = {styles.footerBrand}>
      <h2 className = {styles.logo}>RentPe</h2>
      <p>Smart way to rent and earn. Secure. Simple. Reliable.</p>
    </div>

    <div  className = {styles.footerLinks}>
      <h4>Company</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>

    <div className = {styles.footerLinks}>
      <h4>Support</h4>
      <ul>
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
      </ul>
    </div>

    <div className = {styles.footerSocial}>
      <h4>Connect</h4>
      <div className = {styles.socialIcons}>
        <a href="#"><i class="fab fa-twitter">instagram</i></a>
        <a href="#"><i class="fab fa-linkedin-in">facebook</i></a>
        <a href="#"><i class="fab fa-instagram">linkedin</i></a>
      </div>
    </div>
  </div>

  <div className = {styles.footerBottom}>
    <p>© 2025 RentPe. All rights reserved.</p>
  </div>
</footer>
        </>
    )
}

export default Footer