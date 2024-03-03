import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todoSlice.ts';

const store = configureStore({
  reducer: todoSlice.reducer,
});

export const todoActions = todoSlice.actions;

export default store;
