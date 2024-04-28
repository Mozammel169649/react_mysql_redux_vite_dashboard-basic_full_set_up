import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const pathName = "product";

export const get_all_product = createAsyncThunk(
    "products/get_all_product",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/all`);
        return res.data;
    });
export const get_single_product = createAsyncThunk(
    "products/get_single_product",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/singleData/${params}`);
        // console.log("single product",res.data);
        return res.data;
    });
export const delete_product = createAsyncThunk(
    "products/delete_product",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/${pathName}/delete/${params}`);
        return res.data;
    });
export const update_product = createAsyncThunk(
    "products/update_product",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/update`, formData);
        return res.data;
    });

export const create_product = createAsyncThunk(
    "products/create_product",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/create`,formData);
        return res.data;
    });


const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        singleProduct: {}
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(get_all_product.fulfilled, (state, action) => {
                state.products = action.payload;
                console.log("get all products successfully")
            })
            .addCase(get_single_product.fulfilled, (state, action) => {
                state.singleProduct = action.payload;
                console.log("set single product successfully")
            })
            .addCase(update_product.fulfilled, (state, action) => {
                console.log("product update successfully")
            })
            .addCase(create_product.fulfilled, (state, action) => {
                console.log("product creaste successfully")
            })
            .addCase(delete_product.fulfilled, (state, action) => {
                console.log("product delete successfully")
            })
    }
})


export default productSlice.reducer;