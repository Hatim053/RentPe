import { useSelector } from 'react-redux';
import styles from '../../styles/feed.module.css';
import AdvertisementCard from '../Advertisement/AdvertisementCard.jsx';



function Feed({Ads}) {
   const page = useSelector(state => state.pagination.page);
    const limit = 12;
    const startIdx = (page-1)*limit;
    const endIdx = startIdx + limit;
    
    return (
        <>
            <div className={styles.feed}>
               
             {! Ads && <span className = {styles['empty']}>No Service Found For Your Area</span> } 
             { Ads && Ads.slice(startIdx , endIdx).map((ad) => {
              return  <AdvertisementCard ad = {ad} />
             })}

            </div>
        </>
    )
}

export default Feed