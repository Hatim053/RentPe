import React from "react"
import styles from './adDescription.module.css'


function AdDescription() {



    return (
        <>
          <div  className = {styles.adDetailsContainer}>

    <div  className = {styles.imageSection}>

      <div  className = {styles.thumbnailRow}>
        <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=" className={styles.thumb}  />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_F2gtHze1bw0WE2lwnMWk1695uBfImJUP8Q&s" className={styles.thumb}   />
        <img src="https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?semt=ais_hybrid&w=740&q=80" className={styles.thumb}   />
      </div>
    </div>

    <div  className = {styles.detailsSection}>

      <h1 className = {styles.adTitle}>iPhone 13 Pro - Mint Condition</h1>

      <p  className = {styles.adPrice}>₹ 45,000</p>

      <p  className = {styles.adDescription}>
        Selling my iPhone 13 Pro (256GB). No scratches, battery health 90%, includes box 
        and original charger. Only 1 year used. Available for pickup in Mumbai.
      </p>

      <div  className = {styles.sellerInfo}>
        <img src="https://via.placeholder.com/50"  className = {styles.sellerImg} />
        <div>
          <h3>Hatim Hussain</h3>
          <p>Joined: Jan 2024</p>
        </div>
      </div>

      <button className = {styles["chat-btn"]}>Chat with Seller</button>

    </div>

  </div>
        </>
    )
}

export default AdDescription