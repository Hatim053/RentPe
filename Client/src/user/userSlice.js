import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loggedInUser : null,
}

export const userSlice = createSlice({
    name : 'loggedInUser',
    initialState,
    reducers : {
        addUser : (state , action) => {
            state.loggedInUser = {...action.payload}
        },
        removeUser : (state , action) => {
            state.loggedInUser = null
        }
    }
})


export const { addUser , removeUser } = userSlice.actions
export default userSlice.reducer

