import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

export const suggestionsSlice = createSlice({
    name : 'suggestions',
    initialState,
    reducers : {
        addSuggestionsData : (state , action) => {
        return action.payload;
    },
    removeSuggestionsData : (state , action) => {
        return null;
    }
    }
})

export const { addSuggestionsData , removeSuggestionsData } = suggestionsSlice.actions;
export default suggestionsSlice.reducer;