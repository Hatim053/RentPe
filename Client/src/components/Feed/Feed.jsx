import { useSelector } from 'react-redux';
import styles from '../../styles/feed.module.css';
import AdvertisementCard from '../Advertisement/AdvertisementCard.jsx';
import FeedSkeleton from '../../SkeletonUi/FeedSkeleton.jsx';


function Feed({Ads}) {
   const page = useSelector(state => state.pagination.page);
    const limit = 12;
    const startIdx = (page-1)*limit;
    const endIdx = startIdx + limit;
    if(!Ads) {
  return <FeedSkeleton />
}
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