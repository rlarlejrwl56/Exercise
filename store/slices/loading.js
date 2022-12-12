import {createSlice} from "@reduxjs/toolkit";


const initialState = {};

const lodingSlice = createSlice({
    name : 'loading',
    initialState,
    reducers : {
        startLoading : (state, action) => ({
            ...state,
            [action.payload] : true,
        }),
        finishLoading : (state, action) => ({
            ...state,
            [action.payload] : true,
        })
    }
})
export const {startLoading, finishLoading} = lodingSlice.actions;
export default lodingSlice.reducer;