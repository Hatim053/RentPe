import React from "react"
import styles from './advertisementCard.module.css'

function AdvertisementCard({price , title , city  , image}) {


    return (
        <>
          <div className = {styles.advertisement}>
            <div className = {styles.img}>
                <img src={image} alt="" />
            </div>
            <div className = {styles.price}>{price}</div>
            <div className = {styles.title}>{title}</div>
            <div className = {styles.text}><span class="area">{city}</span><span class="date">Today</span></div>
          </div>
        </>
    )
}


export default AdvertisementCard