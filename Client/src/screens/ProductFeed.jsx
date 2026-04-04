import { useRef } from 'react'
import Header from '../components/Header/Header.jsx'
import SearchSuggestions from '../components/SearchSuggestions/SearchSuggestions.jsx'
import Feed from '../components/Feed/Feed.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Pagination from '../components/Pagination/Pagination.jsx'
import { useSelector , useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSearchedAdvertisements } from '../utitlies/utilities.js'
import { isNextPageAvailable } from '../ReduxStore/paginationSlice.js'
import { addSearchedAdsData } from '../ReduxStore/adSlice.js'

function ProductFeed() {
    const searchedAdsDataMap = useSelector(state => state.advertisement.searchedAdsDataMap);
    const currentLocation = useSelector(state => state.loggedInUser.loggedInUserLocationData); 
    const page = useSelector(state => state.pagination.page);
    const firstLoad = useRef(true);
    const dispatch = useDispatch();
    
     useEffect(() => {
        if(firstLoad.current) {
            firstLoad.current = false;
            return;
        }
        if(!searchedAdsDataMap[page]) { // checking for catched data first before making an API call
         getSearchedAdvertisements(searchedAdsDataMap[page][0].serviceType , currentLocation , page , searchedAdsDataMap , addSearchedAdsData , isNextPageAvailable , dispatch);  
        }
        
     } , [page])
    return (
        <>
            <Header />
            <SearchSuggestions />
            <Feed Ads = {searchedAdsDataMap[page]} />
            <Pagination />
            <Footer />
        </>
    )

}

export default ProductFeed;