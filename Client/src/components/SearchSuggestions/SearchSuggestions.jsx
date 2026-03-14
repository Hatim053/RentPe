import styles from "../../styles/header.module.css"
import { useSelector , useDispatch } from "react-redux"
import { removeSuggestionsData } from '../../ReduxStore/suggestionsSlice.js'
import { getSearchedAdvertisements } from '../../utitlies/utilities.js'
import { addSearchedAdsData } from '../../ReduxStore/searchedAdsSlice.js'
import { useNavigate } from "react-router-dom"
import { updateToInitialPage } from '../../ReduxStore/paginationSlice.js'
import { isNextPageAvailable } from '../../ReduxStore/paginationSlice.js'

function SearchSuggestions() {
   const searchedAds  = useSelector(state => state.searchedAds);
  const suggestions = useSelector(state => state.suggestions);
  const currentLocation = useSelector(state => state.currentLocation);
  const page = useSelector(state => state.pagination.page);

  // console.log('suggestion data in suggestion component' , suggestions)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
   <>
    {suggestions && <ul className={styles.suggestionList}>
     
      {suggestions?.map((item) => (
      <li className={styles.suggestionItem} onClick = {() => {
      dispatch(updateToInitialPage());
        getSearchedAdvertisements(item.serviceType , currentLocation , page , searchedAds , addSearchedAdsData , isNextPageAvailable , dispatch);
       dispatch(removeSuggestionsData());
       navigate('/products-feed');
      }}>{item.title}</li>
      ))}
    </ul>}
   </>
  )
}

export default SearchSuggestions
