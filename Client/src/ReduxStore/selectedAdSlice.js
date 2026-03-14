import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

export const selectedAdSlice = createSlice({
    name : 'selectedAd',
    initialState,
    reducers : {
        addAd : (state , action) => {
            return action.payload
        },
        removeAd : (state , action) => {
            return null
        }
    }
})

export const {addAd , removeAd} = selectedAdSlice.actions;
export default selectedAdSlice.reducer;