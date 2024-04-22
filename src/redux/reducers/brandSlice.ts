import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryType } from '../../pages/categories/categoryType';
import { BrandType } from '../../pages/Brand/brandType';



export const getAllBrands = createAsyncThunk(
  'product/getAllBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://65.0.32.143:8080/igenieadmin/categories', {
        headers: { 'Content-Type': 'application/json' },
      });
      
      localStorage.setItem('brand', JSON.stringify(response));
      console.log('brand/getBrand:', response);
      
      return response.data;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to save categories
export const saveBrands = createAsyncThunk(
  'brand/save',
  async (postBrandData: BrandType, thunkAPI): Promise<any> => {
    try {
      // Your asynchronous logic here
      // Access saveData like this: saveData[0], saveData[1], etc.
      const request = await axios.post("http://65.0.32.143:8080/igenieadmin/brands/save", postBrandData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const response = request.data;
      // localStorage.setItem("categories", JSON.stringify(response));
      console.log("brand/saveBrand:", response);
      return response;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the type for the product state
interface brandState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  Brand: any; // Define a proper type for the saved product
}

// Initial state for the product slice
const initialState: brandState = {
  status: 'idle',
  error: null,
  Brand: [],
};

// Slice to handle state and reducers
const brandSlice = createSlice({
  name: 'brands',
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
      .addCase(getAllBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllBrands.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.Brand = action.payload;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      })
      .addCase(saveBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveBrands.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.Brand = action.payload;
      })
      .addCase(saveBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      });
  },
});

// Export actions and reducer
export const { resetState } = brandSlice.actions;
export default brandSlice.reducer;
