import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

export const recentAdsSlice = createSlice({
    name : 'recentAds',
    initialState,
    reducers : {
        addRecentAdsData : (state , action) => {
            return action.payload
        },
    }
})


export const { addRecentAdsData } = recentAdsSlice.actions;
export default recentAdsSlice.reducer;