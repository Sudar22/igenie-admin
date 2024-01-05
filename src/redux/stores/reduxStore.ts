import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../reducers/vendorSlice'

export const reduxStore = configureStore({
    reducer:{
        user:userSlice,
    }
})