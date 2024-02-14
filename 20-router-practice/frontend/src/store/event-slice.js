import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: { events: [] },
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
  },
});

export const eventActions = eventSlice.actions;

export default eventSlice;
