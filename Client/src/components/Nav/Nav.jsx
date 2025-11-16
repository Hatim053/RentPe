import React from "react"
import styles from './nav.module.css'


function Nav() {



    return (
        <>
                <nav className = {styles.nav}>
            <a href="">All Categories</a>
            <a href="">Furniture</a>
            <a href="">Properties And Venue's</a>
            <a href="">Electronics & Applainces</a>
            <a href="">Lighting & Decor</a>
            <a href="">Catering & serving</a>
            <a href="">Events And More</a>
        </nav>
        </>
    )
}


export default Nav