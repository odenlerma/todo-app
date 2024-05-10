// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    visible: false,
    modalType: 'messageModal', //message // confirm //loadingoverlay //custommodal
    params: [],
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    ACTION_MODAL_SHOWHIDE(state, action) {
      state.visible = !state.visible;
      state.modalType = action.payload.modalType;
      state.params = action.payload.params;
    },
  },
});

export const { ACTION_MODAL_SHOWHIDE } = modalSlice.actions;

export default modalSlice.reducer;