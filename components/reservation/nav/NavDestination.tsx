import {
  CalendarIcon,
  ClockIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import { selectOrigin, setStage } from "../../../src/redux/slices/navSlice";
import { DirectionsResult, LatLngLiteral } from "../../../src/types/googleMaps";
import { Map } from "../../map";
import { Places } from "../../places";
import { NavButton, H1 } from "../../tags";

type NavDestinationProps = {
  mapRef: MutableRefObject<GoogleMap | undefined>;
};

const NavDestination = ({ mapRef }: NavDestinationProps) => {
  const dispatch = useAppDispatch();
  const origin = useAppSelector(selectOrigin);

  useEffect(() => {
    if (!origin) dispatch(setStage("origin"));
  }, [origin]);

  return (
    <div className="flex flex-col gap-3">
      <H1>Where should we drop you off?</H1>
      <Places locType="destination" mapRef={mapRef} />
      <NavButton Icon={CalendarIcon} preText="Next stage" text="Date" />
    </div>
  );
};

export default NavDestination;
