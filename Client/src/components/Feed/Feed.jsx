import React, { useEffect, useState } from "react"
import styles from './feed.module.css'
import Advertisement from "../Advertisement/AdvertisementCard/AdvertisementCard"

function Feed({searchedQuery}) {
    const [searchedAds , setSearchedAds] = useState(null)
    useEffect( () => {
    let response = fetch(`http://localhost:5000/ad/query/${searchedQuery}`)

    response.then((data) => data.json())
    .then((res) => setSearchedAds(res.ads))

    } , [searchedQuery])
    return (
        <>
            <div className={styles.feed}>
             {searchedAds && searchedAds.map((ad) => {
              return  <Advertisement image = {ad.images[0]} city = {ad.city} price = {ad.price} title = {ad.title}/>
             })}
            </div>
        </>
    )
}

export default Feed