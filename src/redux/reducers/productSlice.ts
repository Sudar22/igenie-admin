import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const productInfo = createAsyncThunk(
    "product/Info",
    async (userCredentials) => {
      const request = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/signin",
        data: userCredentials,
           headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
  
      const response = await request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/productInfo:",request.data);
      return response;
    }
  );


  export const saveProduct = createAsyncThunk(
    "product/save",
    async (userCredentials) => {
      const request = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/signin",
        data: userCredentials,
           headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
  
      const response = await request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/productInfo:",request.data);
      return response;
    }
  );



  export const updateProduct = createAsyncThunk(
    "product/update",
    async (userCredentials) => {
      const request = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/signin",
        data: userCredentials,
           headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
  
      const response = await request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/productInfo:",request.data);
      return response;
    }
  );





  

  const productSlice = createSlice({
    name: 'product',
    initialState: {
      user: localStorage.getItem('product')
        ? JSON.parse(localStorage.getItem('product')!)
        : [], // Make sure to define the User type
      loading: false,
      error: null as string | null,
    },
    reducers: {}, // Add any additional reducers if needed
    extraReducers: (builder) => {
      builder
        .addCase(productInfo.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(productInfo.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(productInfo.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          state.error = action.error.message ?? 'Login failed';
        })       
    },
  });

  export default productSlice.reducer;