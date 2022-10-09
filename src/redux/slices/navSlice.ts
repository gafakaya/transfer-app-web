import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DirectionsResult, LatLngLiteral } from "../../types/googleMaps";
import { RootState } from "../store";

type Loc = {
  latLng: LatLngLiteral;
  name: string;
};

type NavState = {
  origin: Loc | null;
  destination: Loc | null;
  timestamp: Date | null;
  returnTimestamp: Date | null;
  stage: "origin" | "destination" | "date";
  directions: DirectionsResult | null;
  totalPrice: number;
};

const initialState: NavState = {
  origin: null,
  destination: null,
  timestamp: null,
  returnTimestamp: null,
  stage: "origin",
  directions: null,
  totalPrice: 0,
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
    setTimestamp: (state, action: PayloadAction<Date>) => {
      state.timestamp = action.payload;
    },
    setReturnTimestamp: (state, action: PayloadAction<Date>) => {
      state.returnTimestamp = action.payload;
    },
    setStage: (state, action: PayloadAction<"origin" | "destination">) => {
      state.stage = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setDirections: (state, action) => {
      state.directions = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  setTimestamp,
  setReturnTimestamp,
  setStage,
  setDirections,
  setTotalPrice,
} = navSlice.actions;

export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.destination;
export const selectTimestamp = (state: RootState) => state.nav.timestamp;
export const selectReturnTimestamp = (state: RootState) =>
  state.nav.returnTimestamp;
export const selectState = (state: RootState) => state.nav.stage;
export const selectDirections = (state: RootState) => state.nav.directions;
export const selectTotalPrice = (state: RootState) => state.nav.totalPrice;

export default navSlice.reducer;
