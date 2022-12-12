import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import produce from 'immer';
import axios from 'axios';

const initialState = {
    loading : 'idle',
    isLogin : false
}



const asyncLoginFetch = createAsyncThunk(
    'asyncThunk/asyncLoginFetch',
    async (loginData, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://localhost:4000/users', loginData);

            return response.data.length !== 0;
        }catch (err){
            return rejectWithValue('error');
        }
    }
)

const loginSlice = createSlice({
    name : 'asyncThunk',
    initialState,
     reducers : {
         logOut(state){
            state.isLogin = false;
         }
     },
    extraReducers : (builder) => {
        builder.addCase(asyncLoginFetch.pending, (state, action)=>{
            state.status = 'Loading';
        })
        builder.addCase(asyncLoginFetch.fulfilled, (state, action) =>{
            state.isLogin = action.payload;
            state.status = 'complete';

        })
        builder.addCase(asyncLoginFetch.rejected, (state, action)=>{
            state.status = 'fail';
        })
    }
})
export const {logOut} = loginSlice.actions;
export default loginSlice.reducer;
export {asyncLoginFetch};