import React from "react"
import styles from './myFeed.module.css'
import { useNavigate } from "react-router-dom"
import { useSelector  , useDispatch } from "react-redux"
import { addAd } from '../../../user/adSlice.js'
import AdvertisementCard from '../../Advertisement/AdvertisementCard/AdvertisementCard.jsx'

function MyFeed() {


const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchedAds = useSelector(state => state.searchedAds)
    console.log(searchedAds)
    function handleDescription(advertisement) {
    dispatch(addAd(advertisement))
    navigate('/adDescription')
    }
    return(
        <>
        <div className = {styles['wrapper']}>
 <div className={styles['my-feed']}>
             {(searchedAds == null || searchedAds.length == 0) ? <span className = {styles['empty']}>you didn't post anything</span> : searchedAds.map((ad) => {
              return  <AdvertisementCard ad = {ad} handleDescription = {handleDescription}/>
             })}
            </div>
</div>
        </>


    )
} 


export default MyFeed