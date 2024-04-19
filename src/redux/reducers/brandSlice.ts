import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for the saveData parameter
type SaveData = string[];

// Async thunk to save category
export const saveBrand = createAsyncThunk(
  'brand/save',
  async (saveData: SaveData, thunkAPI): Promise<any> => {
    try {
      const request = await axios.post("http://65.0.32.143:8080/igenieadmin/brands/save", saveData, {
        headers: { "Content-Type": "application/json" },
      });
      const response = request.data;
      localStorage.setItem("brand", JSON.stringify(response));
      console.log("brand/saveCategory:", response);
      return response;
    } catch (error:any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Define the type for the brand state
interface BrandState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  savedbrand: any; // Define a proper type for the saved brand
}

// Initial state for the brand slice
const initialState: BrandState = {
  status: 'idle',
  error: null,
  savedbrand: null,
};

// Slice to handle state and reducers
const BrandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    resetState: (state) => {
      state.status = 'idle';
      state.error = null;
      state.savedbrand = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveBrand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveBrand.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.savedbrand = action.payload;
      })
      .addCase(saveBrand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Correct the payload type
      });
  },
});

// Export actions and reducer
export const { resetState } = BrandSlice.actions;
export default BrandSlice.reducer;
