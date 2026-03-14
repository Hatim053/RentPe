import { createSlice } from '@reduxjs/toolkit';
const initialState = null;

export const searchedAdsSlice = createSlice({
    name : 'searchedAds',
    initialState,
    reducers : {
        addSearchedAdsData : (state , action) => {
            return action.payload;
        },
        removeSearchedAdsData : (state , action) => {
            return null;
        }
    }
})


export const { addSearchedAdsData , removeSearchedAdsData } = searchedAdsSlice.actions;
export default searchedAdsSlice.reducer;