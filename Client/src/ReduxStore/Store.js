import {configureStore} from '@reduxjs/toolkit'
import loggedInUserReducer from './userSlice.js'
import selectedAdReducer from './selectedAdSlice.js'
import receiverIdReducer from './receiverSlice.js'
import chatIdReducer from './chatSlice.js'
import recentAdsReducer from './recentAdsSlice.js'
import suggestionsReducer from './suggestionsSlice.js'
import searchedAdsReducer from './searchedAdsSlice.js'
import currentLocationReducer from './currentLocationSlice.js'
import paginationReducer from './paginationSlice.js'

export const store = configureStore({
   reducer: {
  loggedInUser: loggedInUserReducer,
  selectedAd : selectedAdReducer,
  receiver : receiverIdReducer,
  chatId : chatIdReducer,
  recentAds : recentAdsReducer,
  suggestions : suggestionsReducer,
  searchedAds : searchedAdsReducer,
  currentLocation : currentLocationReducer,
  pagination : paginationReducer,
}
   
})