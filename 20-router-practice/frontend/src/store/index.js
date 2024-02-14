import { configureStore } from '@reduxjs/toolkit';
import EventSlice from './event-slice';

const store = configureStore({
  reducer: EventSlice.reducer,
});

export default store;
