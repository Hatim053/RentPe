import React from "react"
import styles from './feed.module.css'
import Advertisement from "../Advertisement/Advertisement"

function Feed() {


    return (
        <>
            <div className={styles.feed}>
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            <Advertisement />
            </div>
        </>
    )
}

export default Feed