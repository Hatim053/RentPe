import React from "react"
import styles from './advertisement.module.css'

function Advertisement() {


    return (
        <>
          <div className = {styles.advertisement}>
            <div className = {styles.img}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO4dX6Z4gECWiS5V4ulkFUqmEIUgQTItOZg&s" alt="" />
            </div>
            <div className = {styles.price}>35000$</div>
            <div className = {styles.title}>Mercedes Benz c Class for sale</div>
            <div className = {styles.text}><span class="area">Bandra , Mumbai</span><span class="date">Today</span></div>
          </div>
        </>
    )
}


export default Advertisement