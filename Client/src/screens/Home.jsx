import { useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Banner from '../components/Banner/Banner.jsx'
import Feed from '../components/Feed/Feed.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FeedSkeleton from '../SkeletonUi/FeedSkeleton.jsx'
import Pagination from '../components/Pagination/Pagination.jsx'
import SearchSuggestions from '../components/SearchSuggestions/SearchSuggestions.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getRecentAdvertisements } from '../utitlies/utilities.js'
import { addRecentAdsData } from '../ReduxStore/recentAdsSlice.js'

function Home() {

 const recentsFeaturedAds = useSelector(state => state.recentAds);
 const page = useSelector(state => state.pagination.page);
 const dispatch = useDispatch(); 

useEffect(() => {
  getRecentAdvertisements(recentsFeaturedAds , addRecentAdsData , dispatch , page)
} , [page])


  return (
    <>
  <Header />
  <SearchSuggestions />
  <Banner />
  <Feed Ads = {recentsFeaturedAds}/>
  <Pagination />
  <Footer />
    </>
  )

}

export default Home