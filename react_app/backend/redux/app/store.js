import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import productSlice from "../features/product/productSlice";
import roleSlice from "../features/role/roleSlice";
import categorySlice from "../features/category/categorySlice";
import supplierSlice from "../features/supplier/supplierSlice";

const store = configureStore({
    reducer: {
      users : userSlice,
      products : productSlice,
      roles : roleSlice,
      categorys : categorySlice,
      suppliers : supplierSlice
    }
})

export default store;