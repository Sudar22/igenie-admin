import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Mock API endpoints for demonstration
const USER_API_URL = 'https://example.com/api/user';
const POST_USER_API_URL = 'https://example.com/api/user';

export const fetchUserData = createAsyncThunk(
    "auth/login",
    async (userCredentials) => {
      const request = await axios({
        method: "post",
        url: "http://localhost:5000/api/auth/signin",
        data: userCredentials,
        headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
  
      const response = await request.data;
      localStorage.setItem("user", JSON.stringify(response));
      console.log("user/loginUser:", request.data);
      return response;
    }
  );

export const postUserData = createAsyncThunk(
    "auth/signup",
    async (userCreditional) => {
      try {
        // console.log("dataPost signupUser:", dataPost);
        const request = await axios({
          method: "post",
          url: "http://localhost:5000/api/auth/signup",
          data: userCreditional,
          headers: { "Content-Type": "application/json" },
        });
  
        const response = await request.data;
        localStorage.setItem("user", JSON.stringify(response));
        console.log("signup request.data", request.data);
        return response;
      } catch (err: any) {
        // Specify the type of err as 'any' or a more specific error type
        console.log("signup error 2:", err.message);
      }
    }
  );
  

// Initial state for authentication slice
const initialState = {
  user: null,
  loading: false,
  error: null,
  userData: null, // Additional state to store user data fetched from the API
};

// Create authentication slice
const authSlice = createSlice({
  name: 'auth',
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
    // Extra reducer to handle fetchUserData pending and fulfilled actions
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message ?? "Login failed";
      });
    
    // Extra reducer to handle postUserData pending and fulfilled actions
    builder
      .addCase(postUserData.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(postUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        // You can update state as needed after posting user data
      })
      .addCase(postUserData.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message ?? "User registration failed";
      });
  },
});

// Export actions, reducers, and async thunks
export const { setLoading, setUser, setError, signOut } = authSlice.actions;
export { fetchUserData as fetchUserDataAction, postUserData as postUserDataAction };
export default authSlice.reducer;
