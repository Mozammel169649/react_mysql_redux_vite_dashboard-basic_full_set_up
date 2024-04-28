import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const pathName = "supplier";

export const get_all_supplier = createAsyncThunk(
    "suppliers/get_all_supplier",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/all`);
        return res.data;
    });
export const get_single_supplier = createAsyncThunk(
    "suppliers/get_single_supplier",
    async (params, thunkAPI) => {
        const res = await axios.get(`/${pathName}/singleData/${params}`);
        // console.log("single supplier",res.data);
        return res.data;
    });
export const delete_supplier = createAsyncThunk(
    "suppliers/delete_supplier",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/${pathName}/delete/${params}`);
        return res.data;
    });
export const update_supplier = createAsyncThunk(
    "suppliers/update_supplier",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/update`, formData);
        return res.data;
    });

export const create_supplier = createAsyncThunk(
    "suppliers/create_supplier",
    async (formData, thunkAPI) => {
        const res = await axios.post(`/${pathName}/create`,formData);
        return res.data;
    });


const supplierSlice = createSlice({
    name: 'suppliers',
    initialState: {
        suppliers: [],
        singleSupplier: {}
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(get_all_supplier.fulfilled, (state, action) => {
                state.suppliers = action.payload;
                console.log("get all suppliers successfully")
            })
            .addCase(get_single_supplier.fulfilled, (state, action) => {
                state.singleSupplier = action.payload;
                console.log("set single supplier successfully")
            })
            .addCase(update_supplier.fulfilled, (state, action) => {
                console.log("supplier update successfully")
            })
            .addCase(create_supplier.fulfilled, (state, action) => {
                console.log("supplier creaste successfully")
            })
            .addCase(delete_supplier.fulfilled, (state, action) => {
                console.log("supplier delete successfully")
            })
    }
})


export default supplierSlice.reducer;