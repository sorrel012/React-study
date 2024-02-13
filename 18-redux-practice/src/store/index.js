import { configureStore } from '@reduxjs/toolkit';
import UiReducer from './ui-slice';

const store = configureStore({
  reducer: {
    ui: UiReducer,
  },
});

export default store;
