import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const pathName = "user";

export const get_all_user = createAsyncThunk(
    "users/get_all_user",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/all`);
        return res.data;
    });
export const get_single_user = createAsyncThunk(
    "users/get_single_user",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/singleData/${params}`);
        return res.data;
    });
export const delete_user = createAsyncThunk(
    "users/delete_user",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/${pathName}/delete/${params}`);
        return res.data;
    });
export const update_user = createAsyncThunk(
    "users/update_user",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/update`, formData);
        return res.data;
    });

export const create_user = createAsyncThunk(
    "users/create_user",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/create`,formData);
        return res.data;
    });




const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        singleUser: {}
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(get_all_user.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(get_single_user.fulfilled, (state, action) => {
                state.singleUser = action.payload;
            })
            .addCase(update_user.fulfilled, (state, action) => {
                console.log("user update successfully")
            })
            .addCase(create_user.fulfilled, (state, action) => {
                console.log("user creaste successfully")
            })
            .addCase(delete_user.fulfilled, (state, action) => {
                console.log("user delete successfully")
            })
    }
})


export default userSlice.reducer;