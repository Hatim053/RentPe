import { useEffect, useState } from "react"
import styles from '../../styles/header.module.css'
import useSuggestion from '../../hooks/useSuggestion.js'
import { useDispatch, useSelector } from "react-redux"
import { addSuggestionsData } from '../../ReduxStore/adSlice.js'
import {  addLocation } from '../../ReduxStore/userSlice.js'

function SearchBar() {
 const [searchedQuery , setSearchedQuery] = useState('');
const currentLocation = useSelector(state => state.loggedInUser.loggedInUserLocationData);
  const [suggestions , isLoading, suggestionsError] = useSuggestion(searchedQuery , currentLocation);
  const dispatch = useDispatch();

   useEffect(() => {
  if(suggestions) {
      dispatch(addSuggestionsData(suggestions));
  }
   }, [suggestions])

    return (
        <>
             <div className={styles.location}>
                    <input  type="text" placeholder={`"your location"`} onChange = {(e) => dispatch(addLocation(e.target.value.trim()))} />
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder={`search for "furniture"`} onChange={(e) => setSearchedQuery(e.target.value.trim())} />
                </div>
        </>
    )
}

export default SearchBar;