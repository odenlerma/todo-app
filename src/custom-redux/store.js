import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { MMKV } from 'react-native-mmkv';

import taskReducer from './slice/taskSlice';
import modalReducer from './slice/modalSlice';
import ROOTSAGA from './saga';

import * as UTILS from '@helper/utils'

export const mmkv = new MMKV();
const sagaMiddleware = createSagaMiddleware();

const getTaskList = () => {
  let tasklist = mmkv.getString('storeTasks');

  if(UTILS.isEmpty(tasklist)){ // tasks reducer is empty
    mmkv.set('storeTasks', '[]'); // set initial store
    return {tasks: {tasks: []}} // set initial reducer
  }

  return {tasks: {tasks: JSON.parse(tasklist)}}
}

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
  preloadedState: getTaskList(),
});

sagaMiddleware.run(ROOTSAGA);