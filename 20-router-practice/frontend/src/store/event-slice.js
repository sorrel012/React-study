import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
  name: 'event',
  initialState: { events: [] },
  reducers: {
    replaceEvent(state, action) {
      state.events = action.payload;
    },
    addEvent(state, action) {
      state.events.push(action.payload);
    },
  },
});

export const eventActions = eventSlice.actions;

export default eventSlice;
