import { useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Banner from '../components/Banner/Banner.jsx'
import Feed from '../components/Feed/Feed.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Pagination from '../components/Pagination/Pagination.jsx'
import SearchSuggestions from '../components/SearchSuggestions/SearchSuggestions.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getRecentAdvertisements } from '../utitlies/utilities.js'
import { addAdsArrayByPage } from '../ReduxStore/adSlice.js'

function Home() {

 const homePageAdDataMap = useSelector(state => state.advertisement.homePageAdDataMap);
 const page = useSelector(state => state.pagination.page);
 const dispatch = useDispatch(); 

useEffect(() => {
     if(Object.keys(homePageAdDataMap).length == 0) { // on the initial render fetching data
       getRecentAdvertisements(homePageAdDataMap , addAdsArrayByPage  , dispatch , page);
       return;
     }
  if(!homePageAdDataMap[page]) {// after initial render checking if the data already catched or not
   getRecentAdvertisements(homePageAdDataMap , addAdsArrayByPage  , dispatch , page);
   return;
  } 
} , [page])


  return (
    <>
  <Header />
  <SearchSuggestions />
  <Banner />
  <Feed Ads = {homePageAdDataMap[page]}/>
  <Pagination />
  <Footer />
    </>
  )

}

export default Home