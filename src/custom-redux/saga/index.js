import { takeEvery, put, call } from 'redux-saga/effects';

import { ACTION_BULK_DELETE_TASK, ACTION_DELETE_TASK, ACTION_ADD_TASK, ACTION_EDIT_TASK, ACTION_COMPLETE_TASK, ACTION_BOOKMARK_TASK } from '../slice'

import * as CONSTANTS from '../constants';

function* addTask(action) {
  yield delay(1000);
  yield put(ACTION_ADD_TASK(action.payload));
}

function* editTask(action) {
  yield delay(1000);
  yield put(ACTION_EDIT_TASK(action.payload));
}

function* removeTask(action) {
  yield delay(1000);
  yield put(ACTION_DELETE_TASK(action.payload));
}

function* removeBulkTask(action) {
  yield delay(1000);
  yield put(ACTION_BULK_DELETE_TASK(action.payload));
}

function* toggleCheck(action) {
  yield delay(1000);
  yield put(ACTION_COMPLETE_TASK(action.payload));
}

function* toggleBookmark(action) {
  yield delay(1000);
  yield put(ACTION_BOOKMARK_TASK(action.payload));
}


function* showhideModal({ payload }) {
  if (payload.visible) {
    yield put({ type: CONSTANTS.MODAL_VISIBLE, payload: payload });
  } else {
    yield put({ type: CONSTANTS.MODAL_VISIBLE, payload: {visible: false, params: [], modalType: ''} });
  }
}

export default function* ROOTSAGA() {
    yield takeEvery(CONSTANTS.MODAL_VISIBLE, showhideModal);

    yield takeEvery(CONSTANTS.TASK_ADD_TASK, addTask);
    yield takeEvery(CONSTANTS.TASK_EDIT_TASK, editTask);
    yield takeEvery(CONSTANTS.TASK_REMOVE_TASK, removeTask);
    yield takeEvery(CONSTANTS.TASK_BULK_REMOVE_TASK, removeBulkTask);
    yield takeEvery(CONSTANTS.TASK_TOGGLE_BOOKMARK, toggleBookmark);
    yield takeEvery(CONSTANTS.TASK_TOGGLE_CHECK, toggleCheck);
}   