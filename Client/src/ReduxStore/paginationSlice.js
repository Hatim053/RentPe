import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    page : 1,
    nextPage : true,
};

export const paginationSlice = createSlice({
    name : 'page',
    initialState,
    reducers : {
        incrementPage : (state , action) => {
             state.page = state.page+1;
        },
        decrementPage : (state , action) => {
            state.page = state.page-1;
        },
        updateToInitialPage : (state , action) => {
            state.page = 1;
        },
        isNextPageAvailable : (state , action) => {
            state.nextPage = action.payload;
        }
    }
})
export const { incrementPage , decrementPage , updateToInitialPage , isNextPageAvailable } = paginationSlice.actions;
export default paginationSlice.reducer;