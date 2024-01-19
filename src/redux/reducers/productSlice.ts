import { ThunkAction } from 'redux-thunk';
import  {RootState}  from '../stores/reduxStore';
import { Action } from 'redux';
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const getProductInfo = createAsyncThunk(
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
      console.log("product/getProductInfo:",request.data);
      return response;
    }
  );


  // export const saveProduct = createAsyncThunk(
  //   "product/save",
  //   async (saveData) => {
  //     const request = await axios({
  //       method: "post",
  //       url: "http://localhost:8080/product",
  //       data: saveData,
  //          headers: { "Content-Type": "application/json" },
  //       // headers: { "Content-Type": "multipart/form-data" },
  //     });
  
  //     const response = await request.data;
  //     localStorage.setItem("product", JSON.stringify(response));
  //     console.log("product/saveProductInfo:",request.data);
  //     return response;
  //   }
  // );


//   // Define your action types
// interface SaveProductAction {
//   type: string; // Replace with the actual action type
//   payload: any; // Replace with the actual payload type
// }

// // Assuming your thunk action is using createAsyncThunk
// type ThunkResult<R> = ThunkAction<R, RootState, undefined, Action<string>>;

// export const saveProduct = createAsyncThunk(
//   'product/save',
//   async (saveData: string[], thunkAPI): Promise<any> => {
//     try {
//       // Your asynchronous logic here
//       const request = await axios.post("http://localhost:8080/product", saveData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       const response = request.data;
//       localStorage.setItem("product", JSON.stringify(response));
//       console.log("product/saveProductInfo:", response);
//       return response;
//     } catch (error:any) {
//       // Handle errors
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// ) as ThunkResult<any>;


export const saveProduct = createAsyncThunk(
  'product/save',
  async (saveData: string[], thunkAPI): Promise<any> => {
    try {
      // Your asynchronous logic here
      // Access saveData like this: saveData[0], saveData[1], etc.
      const request = await axios.post("http://localhost:8080/product", saveData, {
        headers: { "Content-Type": "application/json" },
      });
      const response = request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/saveProductInfo:", response);
      return response;
    } catch (error:any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
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
      console.log("product/updateProductInfo:",request.data);
      return response;
    }
  );



  export const getProductOptionValue = createAsyncThunk(
    "product/update",
    async (userCredentials) => {
      const request = await axios({
        method: "post",
        url: "http://localhost:8000/api/auth/signin",
        data: userCredentials,
           headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
  
      const response = await request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/updateProductInfo:",request.data);
      return response;
    }
  );


  export const addProductOptionValue = createAsyncThunk(
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
      console.log("product/updateProductInfo:",request.data);
      return response;
    }
  );


  export const updateProductOptionValue = createAsyncThunk(
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
      console.log("product/updateProductInfo:",request.data);
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
        .addCase(getProductInfo.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(getProductInfo.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(getProductInfo.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          state.error = action.error.message ?? 'getting  failed';
        })
         .addCase(saveProduct.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(saveProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(saveProduct.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          state.error = action.error.message ?? 'saving failed';
        })              
         .addCase(updateProduct.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(updateProduct.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          state.error = action.error.message ?? 'updating failed';
        })              
    },
  });



  // export const { saveProduct } = productSlice.actions;

  export default productSlice.reducer;