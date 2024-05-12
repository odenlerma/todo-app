import { takeEvery, put, call, select, delay } from 'redux-saga/effects';
import { mmkv } from '@custom-redux/store';
import { ACTION_BOOKMARK_TASK_SUCCESS, ACTION_COMPLETE_TASK_SUCCESS, ACTION_EDIT_TASK_SUCCESS, ACTION_BULK_DELETE_TASK_SUCCESS, ACTION_DELETE_TASK_SUCCESS, ACTION_FAIL, ACTION_ADD_TASK_SUCCESS } from '../slice'

function* addTask(action) {
  const state = yield select((state) => state.tasks);
  try{
    let list = [...state.tasks]
    list.push(action.payload);
    yield mmkv.set('storeTasks', JSON.stringify(list));
    yield put(ACTION_ADD_TASK_SUCCESS(list))
  }catch(err){
    if(__DEV__) console.log("addTask ==> ", err)
    ACTION_FAIL()
  }
}

function* removeTask(action) {
  const state = yield select((state) => state.tasks);
  try{
    let list =  yield state.tasks.filter((task) => task.id !== action.payload);
    yield mmkv.set('storeTasks', JSON.stringify(list));
    yield put(ACTION_DELETE_TASK_SUCCESS(list))
  }catch(err){
    if(__DEV__) console.log("removeTask ==> " ,err)
    ACTION_FAIL()
  }
}

function* removeBulkTask(action) {
  const state = yield select((state) => state.tasks);
  try{
    let list =  yield state.tasks.filter(todo => !action.payload.includes(todo.id));
    yield mmkv.set('storeTasks', JSON.stringify(list));
    yield put(ACTION_BULK_DELETE_TASK_SUCCESS(list))
  }catch(err){
    if(__DEV__) console.log("removeBulkTask ==> " ,err)
    ACTION_FAIL()
  }
}

function* editTask(action) {
  const state = yield select((state) => state.tasks);
  try{
    let list =  yield state.tasks.map(todo => todo.id === action.payload.id ? action.payload : todo);
    yield mmkv.set('storeTasks', JSON.stringify(list));
    yield put(ACTION_EDIT_TASK_SUCCESS(list))
  }catch(err){
    if(__DEV__) console.log("editTask ==> " ,err)
    ACTION_FAIL()
  }
}


function* toggleCheck(action) {
  const state = yield select((state) => state.tasks);
  try{
    const list = state.tasks.map(task => {
      if (task.id === action.payload) {
        return {
          ...task,
          isCompleted: !task.isCompleted 
        };
      }
      return task;
    });
    yield mmkv.set('storeTasks', JSON.stringify(list));
    yield put(ACTION_COMPLETE_TASK_SUCCESS(list))
  }catch(err){
    if(__DEV__) console.log("toggleCheck ==> " ,err)
    ACTION_FAIL()
  }
}

function* toggleBookmark(action) {
  const state = yield select((state) => state.tasks);
  try{
    const list = state.tasks.map(task => {
      if (task.id === action.payload) {
        return {
          ...task,
          isBookmarked: !task.isBookmarked 
        };
      }
      return task;
    });
    yield mmkv.set('storeTasks', JSON.stringify(list));
    yield put(ACTION_BOOKMARK_TASK_SUCCESS(list))
  }catch(err){
    if(__DEV__) console.log("toggleBookmark ==> " ,err)
    ACTION_FAIL()
  }
}


export default function* ROOTSAGA() {
    yield takeEvery('taskList/ACTION_ADD_TASK', addTask);
    yield takeEvery('taskList/ACTION_DELETE_TASK', removeTask);
    yield takeEvery('taskList/ACTION_BULK_DELETE_TASK', removeBulkTask);
    yield takeEvery('taskList/ACTION_EDIT_TASK', editTask);
    yield takeEvery('taskList/ACTION_BOOKMARK_TASK', toggleBookmark);
    yield takeEvery('taskList/ACTION_COMPLETE_TASK', toggleCheck);
}   