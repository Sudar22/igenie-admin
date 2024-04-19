import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch } from '../stores/reduxStore';

// Define enhanced types for useDispatch and useSelector hooks
type UseAppDispatch = () => AppDispatch;
type UseAppSelector = TypedUseSelectorHook<RootState>;

// Create enhanced hooks with correct types
export const useAppDispatch: UseAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: UseAppSelector = useSelector;

// You can also define and export other hooks if needed
// export const useAppStore = useStore.withTypes<AppStore>()
// export type AppDispatch = typeof store.dispatch
