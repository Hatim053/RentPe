import React from "react"
import styles from '../../styles/advertisementCard.module.css'
import { handleDescription } from '../../utitlies/utilities.js'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addAd } from '../../ReduxStore/selectedAdSlice.js'

function AdvertisementCard({ ad }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   
    return (
        <>
          <div className = {styles.advertisement} onClick = {() => {
            handleDescription(ad , dispatch , navigate , addAd);
          }}>
            <div className = {styles.img}>
                <img src={ad.images[0]} alt="" />
            </div>
            <div className = {styles.price}>{ad.price}</div>
            <div className = {styles.title}>{ad.title}</div>
            <div className = {styles.text}><span class="area">{ad.city}</span><span class="date">{new Date(ad.createdAt).toDateString().substring(4)}</span></div>
          </div>
        </>
    )
}


export default AdvertisementCard