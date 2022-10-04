import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pricing } from "../../types/Pricing";
import { Reservation } from "../../types/Reservation";
import { RootState } from "../store";

type SettingState = {
  pricing: Pricing[] | null;
  activePricing: Pricing | null;
  allUpToDateReservations: Reservation[] | null;
  allPastReservations: Reservation[] | null;
};

const initialState: SettingState = {
  pricing: null,
  activePricing: null,
  allUpToDateReservations: null,
  allPastReservations: null,
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setPricing: (state, action: PayloadAction<Pricing[]>) => {
      state.pricing = action.payload;
    },
    setActivePricing: (state, action: PayloadAction<Pricing>) => {
      state.activePricing = action.payload;
    },
    setAllUpToDateReservations: (state, action) => {
      state.allUpToDateReservations = action.payload;
    },
    setAllPastReservations: (state, action) => {
      state.allPastReservations = action.payload;
    },
  },
});

export const { setPricing } = settingSlice.actions;
export const { setActivePricing } = settingSlice.actions;
export const { setAllUpToDateReservations } = settingSlice.actions;
export const { setAllPastReservations } = settingSlice.actions;

export const selectPricing = (state: RootState) => state.setting.pricing;
export const selectActivePricing = (state: RootState) =>
  state.setting.activePricing;
export const selectAllUpToDateReservations = (state: RootState) =>
  state.setting.allUpToDateReservations;
export const selectAllPastReservations = (state: RootState) =>
  state.setting.allPastReservations;

export default settingSlice.reducer;
