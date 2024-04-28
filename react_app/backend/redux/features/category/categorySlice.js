import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const pathName = "category";

export const get_all_category = createAsyncThunk(
    "categorys/get_all_category",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/all`);
        return res.data;
    });
export const get_single_category = createAsyncThunk(
    "categorys/get_single_category",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/singleData/${params}`);
        // console.log("single category",res.data);
        return res.data;
    });
export const delete_category = createAsyncThunk(
    "categorys/delete_category",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/${pathName}/delete/${params}`);
        return res.data;
    });
export const update_category = createAsyncThunk(
    "categorys/update_category",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/update`, formData);
        return res.data;
    });

export const create_category = createAsyncThunk(
    "categorys/create_category",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/create`,formData);
        return res.data;
    });


const categorySlice = createSlice({
    name: 'categorys',
    initialState: {
        categorys: [],
        singleCategory: {}
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(get_all_category.fulfilled, (state, action) => {
                state.categorys = action.payload;
                console.log("get all categorys successfully")
            })
            .addCase(get_single_category.fulfilled, (state, action) => {
                state.singleCategory = action.payload;
                console.log("set single category successfully")
            })
            .addCase(update_category.fulfilled, (state, action) => {
                console.log("category update successfully")
            })
            .addCase(create_category.fulfilled, (state, action) => {
                console.log("category creaste successfully")
            })
            .addCase(delete_category.fulfilled, (state, action) => {
                console.log("category delete successfully")
            })
    }
})


export default categorySlice.reducer;