import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DirectionsResult, LatLngLiteral } from "../../types/googleMaps";
import { RootState } from "../store";

type NavState = {
  origin: LatLngLiteral | null;
  destination: LatLngLiteral | null;
  stage: "origin" | "destination";
  directions: DirectionsResult | null;
};

const initialState: NavState = {
  origin: null,
  destination: null,
  stage: "origin",
  directions: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<LatLngLiteral>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<LatLngLiteral>) => {
      state.destination = action.payload;
    },
    setStage: (state, action: PayloadAction<"origin" | "destination">) => {
      state.stage = action.payload;
    },
    setDirections: (state, action: PayloadAction<DirectionsResult>) => {
      state.directions = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setStage, setDirections } =
  navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectState = (state: RootState) => state.nav.stage;
export const selectDirections = (state: RootState) => state.nav.directions;

export default navSlice.reducer;
