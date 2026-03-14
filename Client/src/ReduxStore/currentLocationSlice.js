import { createSlice } from "@reduxjs/toolkit";
const initialState = 'bhopal';

export const currentLocationSlice = createSlice({
    name : 'currentLocation',
    initialState,
    reducers : {
        addLocation : (state , action) => {
            return action.payload;
        }
    }
})

export const { addLocation }  = currentLocationSlice.actions;
export default currentLocationSlice.reducer;