import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../../src/hooks/reduxHooks";
import { selectState } from "../../src/redux/slices/navSlice";
import { Map } from "../map";
import { NavDestination, NavOrigin } from "./nav";

type Props = {};

const Reservation = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const stage = useAppSelector(selectState);

  const [first, setfirst] = useState(0);

  const mapRef = useRef<GoogleMap>();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-3 mx-auto">
      <Map mapRef={mapRef} />
      {stage === "origin" && <NavOrigin mapRef={mapRef} />}

      {stage === "destination" && <NavDestination mapRef={mapRef} />}
    </div>
  );
};

export default Reservation;
