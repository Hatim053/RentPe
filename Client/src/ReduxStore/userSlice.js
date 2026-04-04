import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loggedInUserData : {},
    loggedInUserLocationData : 'bhopal',
}

export const userSlice = createSlice({
    name : 'loggedInUser',
    initialState,
    reducers : {
        addLoggedInUser : (state , action) => {
            // payload structure : {loggedInUser data object}
        const loggedInUserObj = action.payload;
        state.loggedInUserData = loggedInUserObj;
        },
        addLocation : (state , action) => {
            // payload structure : string
            const loggedInUserLocation = action.payload;
            state.loggedInUserLocationData = loggedInUserLocation;
        },
    }
})


export const { addLoggedInUser , addLocation } = userSlice.actions
export default userSlice.reducer

