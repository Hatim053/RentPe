import React, { useEffect, useState } from "react"
import styles from './feed.module.css'
import Advertisement from "../Advertisement/AdvertisementCard/AdvertisementCard"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addAd } from '../../user/adSlice.js'

function Feed({searchedQuery}) {
    const [searchedAds , setSearchedAds] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect( () => {
    let response = fetch(`http://localhost:5000/ad/query/${searchedQuery}`)

    response.then((data) => data.json())
    .then((res) => setSearchedAds(res.ads))

    } , [searchedQuery])

    function handleDescription(advertisement) {
    dispatch(addAd(advertisement))
    navigate('/adDescription')
    }
    return (
        <>
            <div className={styles.feed}>
             {searchedAds && searchedAds.map((ad) => {
              return  <Advertisement ad = {ad} handleDescription = {handleDescription}/>
             })}
            </div>
        </>
    )
}

export default Feed