import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slices/counterSlice";
import navReducer from "../redux/slices/navSlice";
import userReducer from "../redux/slices/userSlice";
import vehicleReducer from "../redux/slices/vehicleSlice";
import settingReducer from "../redux/slices/settingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nav: navReducer,
    user: userReducer,
    vehicle: vehicleReducer,
    setting: settingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
