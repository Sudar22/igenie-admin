import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductType } from '../../sections/@Dashboard/products/productType copy';
// import { ProductType } from '../../sections/@Dashboard/products/productType';



// export const getProductInfo = createAsyncThunk(
//     "product/Info",
//     async (userCredentials) => {
//       const request = await axios({
//         method: "post",
//         url: "http://localhost:5000/api/auth/signin",
//         data: userCredentials,
//            headers: { "Content-Type": "application/json" },
//         // headers: { "Content-Type": "multipart/form-data" },
//       });
  
//       const response = await request.data;
//       localStorage.setItem("product", JSON.stringify(response));
//       console.log("product/getProductInfo:",request.data);
//       return response;
//     }
//   );



export const createProduct = createAsyncThunk(
  'categories/save',
  async (postProductData: ProductType, thunkAPI): Promise<any> => {
    try {
      // Your asynchronous logic here
      // Access saveData like this: saveData[0], saveData[1], etc.
      const request = await axios.post("http://65.0.32.143:8080/igenieadmin/products/save", postProductData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const response = request.data;
      // localStorage.setItem("categories", JSON.stringify(response));
      console.log("product/saveProduct:", response);
      return response;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  'product/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://65.0.32.143:8080/igenieadmin/categories', {
        headers: { 'Content-Type': 'application/json' },
      });
      
      localStorage.setItem('brand', JSON.stringify(response));
      console.log('brand/getProduct:', response);
      
      return response.data;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  export const updateProduct = createAsyncThunk(
//     "product/update",
//     async (userCredentials) => {
//       const request = await axios({
//         method: "post",
//         url: "http://localhost:5000/api/auth/signin",
//         data: userCredentials,
//            headers: { "Content-Type": "application/json" },
//         // headers: { "Content-Type": "multipart/form-data" },
//       });
  
//       const response = await request.data;
//       localStorage.setItem("product", JSON.stringify(response));
//       console.log("product/updateProductInfo:",request.data);
//       return response;
//     }
//   );



  // export const getProductOptionValue = createAsyncThunk(
  //   "product/update",
  //   async (userCredentials) => {
  //     const request = await axios({
  //       method: "post",
  //       url: "http://localhost:8000/api/auth/signin",
  //       data: userCredentials,
  //          headers: { "Content-Type": "application/json" },
  //       // headers: { "Content-Type": "multipart/form-data" },
  //     });
  
  //     const response = await request.data;
  //     localStorage.setItem("product", JSON.stringify(response));
  //     console.log("product/updateProductInfo:",request.data);
  //     return response;
  //   }
  // );


  // export const addProductOptionValue = createAsyncThunk(
  //   "product/update",
  //   async (userCredentials) => {
  //     const request = await axios({
  //       method: "post",
  //       url: "http://localhost:5000/api/auth/signin",
  //       data: userCredentials,
  //          headers: { "Content-Type": "application/json" },
  //       // headers: { "Content-Type": "multipart/form-data" },
  //     });
  
  //     const response = await request.data;
  //     localStorage.setItem("product", JSON.stringify(response));
  //     console.log("product/updateProductInfo:",request.data);
  //     return response;
  //   }
  // );


  // export const updateProductOptionValue = createAsyncThunk(
  //   "product/update",
  //   async (userCredentials) => {
  //     const request = await axios({
  //       method: "post",
  //       url: "http://localhost:5000/api/auth/signin",
  //       data: userCredentials,
  //          headers: { "Content-Type": "application/json" },
  //       // headers: { "Content-Type": "multipart/form-data" },
  //     });
  
  //     const response = await request.data;
  //     localStorage.setItem("product", JSON.stringify(response));
  //     console.log("product/updateProductInfo:",request.data);
  //     return response;
  //   }
  // );

  interface ProductState {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    Product: any; // Define a proper type for the saved product
  }
  const initialState: ProductState = {
    status: 'idle',
    error: null,
    Product: [],
  };
  
  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
      resetState: (state) => {
        state.status = 'idle';
        state.error = null;
        // state.categories = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getAllProducts.fulfilled, (state, action: PayloadAction<any>) => {
          state.status = 'succeeded';
          state.Product = action.payload;
        })
        .addCase(getAllProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string; // Correct the payload type
        })
        .addCase(createProduct.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(createProduct.fulfilled, (state, action: PayloadAction<any>) => {
          state.status = 'succeeded';
          state.Product = action.payload;
        })
        .addCase(createProduct.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload as string; // Correct the payload type
        });
    },
  });
  
  // Export actions and reducer
  export const { resetState } = productSlice.actions;
 
  


  // export const { saveProduct } = productSlice.actions;

  export default productSlice.reducer;