import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/user.reducer";
import notificationsReducer from "./reducers/notifications.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    notifications: notificationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;