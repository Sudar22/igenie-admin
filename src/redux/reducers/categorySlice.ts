import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getAllCategory = createAsyncThunk(
    "product/Info",
    async (userCredentials) => {
      const request = await axios({
        method: "get",
        url: "http://localhost:8080/categories/all",
        data: userCredentials,
           headers: { "Content-Type": "application/json" },
        // headers: { "Content-Type": "multipart/form-data" },
      });
  
      const response = await request.data;
      localStorage.setItem("product", JSON.stringify(response));
      console.log("product/getCategory:",request.data);
      return response;
    }
  );


 export const saveCategory = createAsyncThunk(
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
        console.log("product/saveCategory:", response);
        return response;
      } catch (error:any) {
        // Handle errors
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );