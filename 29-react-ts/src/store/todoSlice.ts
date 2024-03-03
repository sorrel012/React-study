import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../models/todo.ts';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
