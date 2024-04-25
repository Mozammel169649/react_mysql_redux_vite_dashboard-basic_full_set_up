// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'


// export const get_all_product = createAsyncThunk(
//     "product/get_all_product",
//     async () => {
//         const res = await axios.get("/product");
//         return res.data;
//     });
// export const get_single_product = createAsyncThunk(
//     "product/get_single_product",
//     async (params) => {
//         // console.log('params', params);
//         const resee = await axios.get(`/product/${params}`);
//         return resee.data;
//     });
// export const delete_product = createAsyncThunk(
//     "product/delete_product",
//     async (params, thunkAPI) => {
//         console.log(params);
//         const res = await axios.delete(`/deleteproduct/${params}`);
//         // return res.data;
//     });
// export const update_product = createAsyncThunk(
//     "product/update_product",
//     async (update, thunkAPI) => {
//         const res = await axios.put(`/updateproduct`, update);
//         // return res.data; 
//     });
// export const create_product = createAsyncThunk(
//     "product/create_product",
//     async (data, thunkAPI) => {
//         // console.log(data);
//         const res = await axios.post('/createproduct', data);
//         return res.data;
//     });


// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         products: [],
//         singleProduct: {}
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(get_all_product.fulfilled, (state, action) => {
//                 state.products = action.payload;
//             })
//             .addCase(get_single_product.fulfilled, (state, action) => {
//                 state.singleProduct = action.payload;
//             })
//             .addCase(create_product.fulfilled, (state, action) => {
//                 state.products = action.payload;
//             })
//             .addCase(update_product.fulfilled, (state, action) => {
//             })
//             .addCase(delete_product.fulfilled, (state, action) => {
//             })
//     }
// })

// export default productSlice.reducer;