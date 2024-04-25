import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const get_all_user = createAsyncThunk(
    "users/get_all_user",
    async (params, thunkAPI) => {
        const res = await axios.get("/user/all");
        return res.data;
    });
export const delete_user = createAsyncThunk(
    "users/delete_user",
    async (params, thunkAPI) => {
        const res = await axios.delete(`/user/Delete/${params}`);
        return res.data;
    });
export const update_user = createAsyncThunk(
    "users/update_user",
    async (updateUser, thunkAPI) => {
        // console.log(updateUser);
        const res = await axios.put(`/user/updateUser/${updateUser.id}`,updateUser);
        return res.data;
    });

export const create_user = createAsyncThunk(
    "users/create_user",
    async (params, thunkAPI) => {
        const res = await axios.post('/user/create');
        return res.data;
    });




const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    // reducers: {
    //   getUser: async (state) => {
    //     console.log("getUser ok")
    //     const response = await axios.get('/user')
    //     // console.log("api ok", response)
    //     state.users = response.data;
    //     // console.log("state",state.users);
    //   },
    //   updateUserData: (state, action) => {
    //     const index = state.users.findIndex(e => e._id === action.payload.id)
    //     state.users[index] = {
    //       email: action.payload.email,
    //       userName: action.payload.userName,
    //       role: action.payload.role,
    //     }
    //   },
    //   deleteUser:(state, action)=>{
    //     state.users =state.users.filter( (e) => e.id !== action.payload );
    //    }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(get_all_user.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(update_user.fulfilled, (state, action) => {
            })
            // .addCase(create_user.fulfilled, (state, action) => {
            //     state.users = action.payload;
            // })
            .addCase(delete_user.fulfilled, (state, action) => {
            })
    }
})


export default userSlice.reducer;