import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'taskList',
  initialState: [],
  reducers: {
    ACTION_ADD_TASK: (state, action) => {
      state.push(action.payload);
      // state.sort((a, b) => a.date.getTime() - b.date.getTime());
    },
    ACTION_DELETE_TASK: (state, action) => {
      return state.filter((task) => task.id !== action.payload)
    },
    ACTION_BULK_DELETE_TASK: (state, action) => {
      return state.filter(todo => !action.payload.includes(todo.id));
    },
    ACTION_EDIT_TASK: (state, action) => {
      return state.map(todo => todo.id === action.payload.id ? action.payload : todo)
    },
    ACTION_BOOKMARK_TASK: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isBookmarked = !task.isBookmarked;
      }
    },
    ACTION_COMPLETE_TASK: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
  },
});

export const { ACTION_BULK_DELETE_TASK, ACTION_DELETE_TASK, ACTION_ADD_TASK, ACTION_EDIT_TASK, ACTION_COMPLETE_TASK, ACTION_BOOKMARK_TASK} = taskSlice.actions;

export default taskSlice.reducer;