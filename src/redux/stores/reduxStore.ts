import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../reducers/vendorSlice'
// import productSlice from '../reducers/productSlice'
// import rootReducer from '../reducers/rootReducer' 
import authSlice from '../reducers/authSlice';
import productSlice from '../reducers/productSlice';
import categorySlice from '../reducers/categorySlice';
import brandSlice from '../reducers/brandSlice';



export const reduxStore = configureStore({
  reducer: {
    user: userSlice,
    product: productSlice,
    auth:authSlice,
    category:categorySlice,
    brands: brandSlice
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch