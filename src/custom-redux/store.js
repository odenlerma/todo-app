import { configureStore } from '@reduxjs/toolkit'
import { MMKV } from 'react-native-mmkv';

import taskReducer from './slice/taskSlice';
import modalReducer from './slice/modalSlice';

import * as UTILS from '@helper/utils'

export const mmkv = new MMKV();

const getTaskList = () => {
  let tasklist = mmkv.getString('taskList')
  if(UTILS.isEmpty(tasklist)) return {}
  return {tasks: JSON.parse(tasklist)}
}

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  preloadedState: getTaskList(),
});