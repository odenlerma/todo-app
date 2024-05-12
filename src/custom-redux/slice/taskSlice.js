import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'taskList',
  initialState: {
    tasks: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    // fail
    ACTION_FAIL: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },

    // add task
    ACTION_ADD_TASK: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    ACTION_ADD_TASK_SUCCESS: (state, action) => {
      state.tasks = action.payload
      state.isLoading = false;
      state.error = false;
    },

    // delete task
    ACTION_DELETE_TASK: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    ACTION_DELETE_TASK_SUCCESS: (state, action) => {
      state.tasks = action.payload
      state.isLoading = false;
      state.error = false;
    },

    // bulk delete
    ACTION_BULK_DELETE_TASK: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    ACTION_BULK_DELETE_TASK_SUCCESS: (state, action) => {
      state.tasks = action.payload
      state.isLoading = false;
      state.error = false;
    },

    // edit task
    ACTION_EDIT_TASK: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    ACTION_EDIT_TASK_SUCCESS: (state, action) => {
      state.tasks = action.payload
      state.isLoading = false;
      state.error = false;
    },

    // check/uncheck task
    ACTION_COMPLETE_TASK: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    ACTION_COMPLETE_TASK_SUCCESS: (state, action) => {
      state.tasks = action.payload
      state.isLoading = false;
      state.error = false;
    },


    ACTION_BOOKMARK_TASK: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    ACTION_BOOKMARK_TASK_SUCCESS: (state, action) => {
      state.tasks = action.payload
      state.isLoading = false;
      state.error = false;
    },

    
    ACTION_ACKNOWLEDGE_ERROR: (state, action) => {
      state.error = false;
      state.isLoading = false;
    }
  },
});

export const { ACTION_ACKNOWLEDGE_ERROR, ACTION_BOOKMARK_TASK_SUCCESS, ACTION_FAIL, ACTION_COMPLETE_TASK_SUCCESS, ACTION_EDIT_TASK_SUCCESS, ACTION_BULK_DELETE_TASK_SUCCESS, ACTION_DELETE_TASK_SUCCESS, ACTION_DELETE_TASK_FAIL, ACTION_ADD_TASK_SUCCESS, ACTION_ADD_TASK_FAIL, ACTION_BULK_DELETE_TASK, ACTION_DELETE_TASK, ACTION_ADD_TASK, ACTION_EDIT_TASK, ACTION_COMPLETE_TASK, ACTION_BOOKMARK_TASK} = taskSlice.actions;

export default taskSlice.reducer;