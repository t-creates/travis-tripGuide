import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  global: object;
}

const initialState: NotificationState = {
  global: {},
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    errorGlobal: (state, action: PayloadAction<string>) => {
      state.global.error = true;
      state.global.msg = action.payload;
    },
    successGlobal: (state, action: PayloadAction<string>) => {
      state.global.success = true;
      state.global.msg = action.payload;
    },
    clearNotification: (state) => {
      state.global = {};
    }
  },
});

export const { errorGlobal, successGlobal, clearNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;