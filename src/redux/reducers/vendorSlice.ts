import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';



export const loginUser = createAsyncThunk(
    "user/loginUser",
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
      console.log("user/loginUser:",request.data);
      return response;
    }
  );
  



  export const signupUser = createAsyncThunk(
    "user/signupUser",
    async (dataPost) => {
      try {
        console.log("dataPost signupUser:", dataPost);
        const request = await axios({
          method: "post",
          url: "http://localhost:5000/api/auth/signup",
          data: dataPost,
          headers: { "Content-Type": "application/json" },
          // headers: { "Content-Type": "multipart/form-data" },
        })

        
        const response  = await request.data ;
        localStorage.setItem("user", JSON.stringify(response));
        console.log("signup request.data", request.data);
        return response;
      } catch (err) {
    
        console.log("signup error 2:", {err}.message);
      }
    }
  );



  const userSlice = createSlice({
    name: 'user',
    initialState: {
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user')!)
        : [], // Make sure to define the User type
      loading: false,
      error: null as string | null,
    },
    reducers: {}, // Add any additional reducers if needed
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          state.error = action.error.message ?? 'Login failed';
        })
        .addCase(signupUser.pending, (state) => {
          state.loading = true;
          state.user = null;
          state.error = null;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
          state.error = null;
        })
        .addCase(signupUser.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          state.error = action.error.message ?? 'User registration failed';
        });
    },
  });

// export const { login } = userSlice.actions;
// export const selectUser = (state) => state.user.info;
export default userSlice.reducer;