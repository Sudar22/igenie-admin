import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the type for the user credentials
interface UserCredentials {
  // Define the structure of user credentials if needed
}

// Define the type for the saveData parameter
type SaveData = string[];

// Async thunk to get all categories
export const getAllCategory = createAsyncThunk(
  "product/Info",
  async (userCredentials: UserCredentials, thunkAPI): Promise<any> => {
    try {
      const request = await axios.get("http://localhost:8080/categories/all", {
        headers: { "Content-Type": "application/json" },
      });

      const response = await request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/getCategory:", request.data);
      return response;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to save category
export const saveCategory = createAsyncThunk(
  'product/save',
  async (saveData: SaveData, thunkAPI): Promise<any> => {
    try {
      // Your asynchronous logic here
      // Access saveData like this: saveData[0], saveData[1], etc.
      const request = await axios.post("http://65.0.32.143:8080/igenieadmin/categories/save", saveData, {
        headers: { "Content-Type": "application/json" },
      });
      const response = request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/saveCategory:", response);
      return response;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the type for the product state
interface ProductState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  savedProduct: any; // Define a proper type for the saved product
}

// Initial state for the product slice
const initialState: ProductState = {
  status: 'idle',
  error: null,
  savedProduct: null,
};

// Slice to handle state and reducers
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = 'idle';
      state.error = null;
      state.savedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCategory.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.savedProduct = action.payload;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      })
      .addCase(saveCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveCategory.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.savedProduct = action.payload;
      })
      .addCase(saveCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      });
  },
});

// Export actions and reducer
export const { resetState } = productSlice.actions;
export default productSlice.reducer;
