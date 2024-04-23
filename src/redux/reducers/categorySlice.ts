import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryType } from '../../pages/categories/categoryType';



export const getAllCategories = createAsyncThunk(
  'product/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:8080/igenieadmin/categories', {
        headers: { 'Content-Type': 'application/json' },
      });
      
    
      console.log('categories/getCategories:', response);
      
      return response.data;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to save categories
export const saveCategories = createAsyncThunk(
  'categories/save',
  async (postCategoryData: CategoryType, thunkAPI): Promise<any> => {
    try {
      // Your asynchronous logic here
      // Access saveData like this: saveData[0], saveData[1], etc.
      const request = await axios.post("http://localhost:8080/igenieadmin/categories/save", postCategoryData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const response = request.data;
      // localStorage.setItem("categories", JSON.stringify(response));
      console.log("categories/saveCategories:", response);
      return response;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the type for the product state
interface categoriesState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  categories: any; // Define a proper type for the saved product
}

// Initial state for the product slice
const initialState: categoriesState = {
  status: 'idle',
  error: null,
  categories: [],
};

// Slice to handle state and reducers
const categoriesSlice = createSlice({
  name: 'categories',
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
      .addCase(getAllCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCategories.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      })
      .addCase(saveCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveCategories.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(saveCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      });
  },
});

// Export actions and reducer
export const { resetState } = categoriesSlice.actions;
export default categoriesSlice.reducer;
