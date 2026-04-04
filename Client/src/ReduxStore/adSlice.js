import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    homePageAdDataMap: {}, // pageNumber : 1 , [advertisement array]
    adDataMap: {}, // id : xyz ,  {advertisement object}
    loggedInUserAdData: [], //  [array of advertisements that loggedInUser has published] 
    searchedAdsDataMap: {},
    suggestionAdData: null, // []
};

export const adSlice = createSlice({
    name: 'advertisement',
    initialState,
    reducers: {
        addAdsArrayByPage: (state, action) => {
            // payload structure : {page : 1 , advertisementArray : []}
            const page = action.payload?.page;
            const advertisementArray = action.payload?.advertisementArray;
            state.homePageAdDataMap[page] = advertisementArray;
        },
        addDataById: (state, action) => {
            // payload structure : productObj : {}
            const advertisementObj = action.payload;
            const advertisementId = advertisementObj?._id;
            state.adDataMap[advertisementId] = advertisementObj;
        },
        addLoggedInUserAd: (state, action) => {
            // payload structure : [array of advertisements]
            const advertisementArray = action.payload;
            state.loggedInUserAdData = advertisementArray;
        },
        addSearchedAdsData: (state, action) => {
             // payload structure : {page : 1 , advertisementArray : []}
            const page = action.payload?.page;
            const advertisementArray = action.payload?.advertisementArray;
            state.searchedAdsDataMap[page] = advertisementArray;
        },
        addSuggestionsData: (state, action) => {
            // payload structure : [array of advertisement]
            const advertisementArray = action.payload;
            state.suggestionAdData = advertisementArray;
        },
        removeSuggestionsData : (state , action) => {
            state.suggestionAdData = null
        }
    }
});

export const { addAdsArrayByPage,
    addDataById,
    addLoggedInUserAd,
    addSearchedAdsData,
    addSuggestionsData,
    removeSuggestionsData,
} = adSlice.actions;
export default adSlice.reducer;