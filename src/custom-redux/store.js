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
  let tasklist = mmkv.getString('taskList')
  if(UTILS.isEmpty(tasklist)) return {}
  return {tasks: JSON.parse(tasklist)}
}

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
  preloadedState: getTaskList(),
});

// store.subscribe(() => {
//   const current = store.getState();
//   if(!UTILS.isEmpty(current.tasks)){
//       mmkv.set('taskList', JSON.stringify(store.getState().tasks));
//   }
// });

sagaMiddleware.run(ROOTSAGA);