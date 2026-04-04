import {configureStore} from '@reduxjs/toolkit'
import loggedInUserReducer from './userSlice.js'
import receiverIdReducer from './receiverSlice.js'
import chatIdReducer from './chatSlice.js'
import paginationReducer from './paginationSlice.js'
import advertisementReducer from '../ReduxStore/adSlice.js'

export const store = configureStore({
   reducer: {
  loggedInUser: loggedInUserReducer,
  advertisement: advertisementReducer,
  receiver : receiverIdReducer,
  chatId : chatIdReducer,
  pagination : paginationReducer,
}
   
})