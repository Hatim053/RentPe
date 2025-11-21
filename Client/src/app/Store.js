import {configureStore} from '@reduxjs/toolkit'
import loggedInUserReducer from '../user/userSlice.js'

export const store = configureStore({
   reducer: {
  loggedInUser: loggedInUserReducer
}
   
})