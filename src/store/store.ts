// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice'; // Định nghĩa authSlice ở phần sau

const store = configureStore({
  reducer: {
    auth: authReducer, // Auth slice quản lý trạng thái xác thực
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

