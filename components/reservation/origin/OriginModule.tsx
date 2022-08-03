import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useRef, useState } from "react";
import { Map } from "../../map";
import { Places } from "../../places";
import { NavButton } from "../../tags/buttons";
import { H1 } from "../../tags/headings";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

type Props = {};

const OriginModule = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [origin, setOrigin] = useState<LatLngLiteral>();
  const [direction, setDirection] = useState<DirectionsResult>();

  const mapRef = useRef<GoogleMap>();

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-3 mx-auto">
      <H1>Where can we pick you up?</H1>
      <Places
        setOrigin={(position) => {
          setOrigin(position);
          mapRef.current?.panTo(position);
        }}
      />
      <div className="flex gap-3 text-sm">
        <NavButton Icon={LocationMarkerIcon} text="Transfer" />
        <NavButton Icon={ClockIcon} text="Hourly Rental" />
      </div>
      <Map mapRef={mapRef} origin={origin} />
    </div>
  );
};

export default OriginModule;
