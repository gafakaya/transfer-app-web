import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/Auth";
import { Vehicle } from "../../types/Vehicle";
import { RootState } from "../store";

type VehicleState = {
  vehicles: Vehicle[] | null;
  selectedVehicle: Vehicle | null;
};

const initialState: VehicleState = {
  vehicles: null,
  selectedVehicle: null,
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload;
    },
    setSelectedVehicle: (state, action) => {
      state.selectedVehicle = action.payload
    }
  },
});

export const { setVehicles } = vehicleSlice.actions;
export const { setSelectedVehicle } = vehicleSlice.actions;

export const selectVehicles = (state: RootState) => state.vehicle.vehicles;
export const selectSelectedVehicle = (state: RootState) => state.vehicle.selectedVehicle;

export default vehicleSlice.reducer;
