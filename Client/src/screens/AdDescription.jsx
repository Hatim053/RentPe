import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styles from '../styles/adDescription.module.css'
import { useSelector, useDispatch } from "react-redux"
import { addReceiver } from "../ReduxStore/receiverSlice.js"
import { addChatId } from "../ReduxStore/chatSlice.js"
import { redirectChat, handleDeleteAd } from '../utitlies/utilities.js'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'


function AdDescription() {
  const navigate = useNavigate()
  const {advertisementId} = useParams();
  const advertisement = useSelector(state => state.advertisement.adDataMap)[advertisementId];
  const dispatch = useDispatch();
  const [mainImage, setMainImage] = useState(advertisement.images[0])
  const loggedInUserId = useSelector(state => state.loggedInUser?._id)

  return (
    <>
      <Header />
 
      <button className={styles.goBackBtn} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      <div className={styles.adDetailsContainer}>
        <div className={styles.imageSection}>
          <img src={mainImage} className={styles.mainImage} />
          <div className={styles.thumbnailRow}>
            {advertisement.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className={`${styles.thumb} ${mainImage === img ? styles.activeThumb : ""}`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className={styles.detailsSection}>
          <h1 className={styles.adTitle}>{advertisement.title}</h1>
          <p className={styles.adPrice}>{`₹${advertisement.price}`}</p>
          <p className={styles.adDescription}>
            {advertisement.description}
          </p>
          <div className={styles.sellerInfo}>
            <img src={advertisement.sellerImage || 'https://cdn-icons-png.flaticon.com/512/847/847969.png'} className={styles.sellerImg} />
            <div>
              <h3 className={styles.sellerName}>{advertisement.sellerUsername || 'user'}</h3>
              <p className={styles.joinedDate}>Joined: Jan 2024</p>
            </div>
          </div>
          {advertisement.sellerId != loggedInUserId ? <button className={styles.chatBtn} onClick={() => redirectChat(loggedInUserId, advertisement, navigate, dispatch, addReceiver, addChatId)}>Chat with Seller</button> : ''}
          {advertisement.sellerId == loggedInUserId ? <button className={styles.chatBtn} onClick={() => handleDeleteAd(advertisement, navigate)}>Delete Advertisement</button> : ''}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdDescription
