import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const pathName = "role";

export const get_all_role = createAsyncThunk(
    "roles/get_all_role",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/all`);
        return res.data;
    });
export const get_single_role = createAsyncThunk(
    "roles/get_single_role",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/singleData/${params}`);
        // console.log("single role",res.data);
        return res.data;
    });
export const delete_role = createAsyncThunk(
    "roles/delete_role",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/${pathName}/delete/${params}`);
        return res.data;
    });
export const update_role = createAsyncThunk(
    "roles/update_role",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/update`, formData);
        return res.data;
    });

export const create_role = createAsyncThunk(
    "roles/create_role",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/create`,formData);
        return res.data;
    });


const roleSlice = createSlice({
    name: 'roles',
    initialState: {
        roles: [],
        singleRole: {}
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(get_all_role.fulfilled, (state, action) => {
                state.roles = action.payload;
                console.log("get all role successfully")
            })
            .addCase(get_single_role.fulfilled, (state, action) => {
                state.singleRole = action.payload;
                console.log("set single role successfully")
            })
            .addCase(update_role.fulfilled, (state, action) => {
                console.log("role update successfully")
            })
            .addCase(create_role.fulfilled, (state, action) => {
                console.log("role creaste successfully")
            })
            .addCase(delete_role.fulfilled, (state, action) => {
                console.log("role delete successfully")
            })
    }
})


export default roleSlice.reducer;