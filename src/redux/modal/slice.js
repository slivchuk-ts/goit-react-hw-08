import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    contactToDelete: null,
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.contactToDelete = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.contactToDelete = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;