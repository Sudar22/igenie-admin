import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createSellerWithGmailType } from "../../auth/authType/googleSignin";

// const url = (text:string) => {
//   return `${process.env.NEXT_PUBLIC_URL}/${text}`;
// };

export const createSellerWithGmail = createAsyncThunk(
  "auth/signup",
  async (credentials: createSellerWithGmailType, thunkAPI) => {
    try {
      const response = await axios.post<createSellerWithGmailType>(
        // "http://localhost:8080/igenieadmin/users/save",
        "http://65.0.32.143:8080/igenieadmin/users/save",
        credentials,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("signup response:", response.data);
      return response.data;
    } catch (err: any) {
      console.log("signup error:", err.message);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export interface DataState {
  user: any;
  loading: boolean;
  error: String | null;
}

// Initial state for authentication slice
const initialState: DataState = {
  user: [],
  loading: false,
  error: null,
};

// Create authentication slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to set loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Reducer to set user information
    setUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Reducer to handle authentication errors
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    // Reducer to handle sign-out
    signOut: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSellerWithGmail.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(
        createSellerWithGmail.fulfilled,
        (state, action: PayloadAction<createSellerWithGmailType>) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
          // You can update state as needed after posting user data
        }
      )
      .addCase(
        createSellerWithGmail.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.user = action.payload.message ?? "User registration failed";
        }
      );
  },
});

// Export actions, reducers, and async thunks
export const { setLoading, setUser, setError, signOut } = authSlice.actions;
// export { fetchUserData as fetchUserDataAction, createSellerWithGmail as postUserDataAction };
export default authSlice.reducer;
