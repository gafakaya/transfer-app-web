import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cred, User } from "../../types/Auth";
import { Reservation } from "../../types/Reservation";
import { RootState } from "../store";

type UserState = {
  user: User | null;
  ownUpToDateReservations: Reservation[] | null;
  ownPastReservations: Reservation[] | null;
  ownReservations: Reservation[] | null;
  cred: Cred | null;
};

const initialState: UserState = {
  user: null,
  ownUpToDateReservations: null,
  ownPastReservations: null,
  ownReservations: null,
  cred: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setOwnUpToDateReservations: (state, action) => {
      state.ownUpToDateReservations = action.payload;
    },
    setOwnPastReservations: (state, action) => {
      state.ownPastReservations = action.payload;
    },
    setOwnReservations: (state, action) => {
      state.ownReservations = action.payload;
    },
    setCred: (state, action) => {
      state.cred = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const { setOwnUpToDateReservations } = userSlice.actions;
export const { setOwnPastReservations } = userSlice.actions;
export const { setCred } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
export const selectOwnUpToDateReservations = (state: RootState) =>
  state.user.ownUpToDateReservations;
export const selectOwnPastReservations = (state: RootState) =>
  state.user.ownPastReservations;
export const selectOwnReservations = (state: RootState) =>
  state.user.ownReservations;
export const selectCred = (state: RootState) => state.user.cred;
export default userSlice.reducer;
