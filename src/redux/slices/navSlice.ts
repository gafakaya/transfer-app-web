import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DirectionsResult, LatLngLiteral } from "../../types/googleMaps";
import { RootState } from "../store";

type Loc = {
  latLng: LatLngLiteral;
  placeId: string;
  name: string;
};

type NavState = {
  origin: Loc | null;
  destination: Loc | null;
  timestamp: number | null;
  stage: "origin" | "destination" | "date";
  directions: DirectionsResult | null;
};

const initialState: NavState = {
  origin: null,
  destination: null,
  timestamp: null,
  stage: "origin",
  directions: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<Loc>) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<Loc>) => {
      state.destination = action.payload;
    },
    setTimestamp: (state, action: PayloadAction<number>) => {
      state.timestamp = action.payload;
    },
    setStage: (state, action: PayloadAction<"origin" | "destination">) => {
      state.stage = action.payload;
    },
    setDirections: (state, action: PayloadAction<DirectionsResult>) => {
      state.directions = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTimestamp,
  setStage,
  setDirections,
} = navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTimestamp = (state: RootState) => state.nav.timestamp;
export const selectState = (state: RootState) => state.nav.stage;
export const selectDirections = (state: RootState) => state.nav.directions;

export default navSlice.reducer;
