import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// export const loginUser = createAsyncThunk(
//   "user/loginUser",
//   async (userCredentials) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/signin", userCredentials, {
//         headers: { "Content-Type": "application/json" }
//       });

//       localStorage.setItem("user", JSON.stringify(response.data));
//       console.log("user/loginUser:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("loginUser error:", error.message);
//       throw error;
//     }
//   }
// );

// export const signupUser = createAsyncThunk(
//   "user/signupUser",
//   async (dataPost) => {
//     try {
//       console.log("dataPost signupUser:", dataPost);
//       const response = await axios.post("http://localhost:5000/api/auth/signup", dataPost, {
//         headers: { "Content-Type": "application/json" }
//       });

//       localStorage.setItem("user", JSON.stringify(response.data));
//       console.log("signup response.data:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error("signupUser error:", error.message);
//       throw error;
//     }
//   }
// );

export const getAllUsers = createAsyncThunk(
  'user/getAllUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://ndtgenie.ai:8080/igenieadmin//users/page/1", {
        headers: { 'Content-Type': 'application/json' },
      });
      
      console.log('user/getUser:', response);
      
      return response.data;
    } catch (error: any) {
      // Handle errors
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

interface UserState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  users: any[]; // Define a proper type for the users array
}

const initialState: UserState = {
  status: 'idle',
  error: null,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllUsers.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<any>) => {
      state.status = 'succeeded';
      state.users = action.payload;
    })
    .addCase(getAllUsers.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? "An error occurred";
    });
  },
});

export default userSlice.reducer;
