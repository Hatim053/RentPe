import React from "react"
import styles from './advertisementCard.module.css'

function AdvertisementCard({ad , handleDescription}) {


    return (
        <>
          <div className = {styles.advertisement} onClick = {() => {
            handleDescription(ad)
          }}>
            <div className = {styles.img}>
                <img src={ad.images[0]} alt="" />
            </div>
            <div className = {styles.price}>{ad.price}</div>
            <div className = {styles.title}>{ad.title}</div>
            <div className = {styles.text}><span class="area">{ad.city}</span><span class="date">Today</span></div>
          </div>
        </>
    )
}


export default AdvertisementCard