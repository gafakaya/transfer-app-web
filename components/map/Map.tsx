import {
  useState,
  useMemo,
  useCallback,
  MutableRefObject,
  useEffect,
} from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
} from "@react-google-maps/api";
import { Places } from "../places";
import {
  DirectionsResult,
  LatLngLiteral,
  MapOptions,
} from "../../src/types/googleMaps";
import {
  selectDestination,
  selectDirections,
  selectOrigin,
  setDirections,
} from "../../src/redux/slices/navSlice";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { Button } from "../tags";
// import Distance from "./distance";

type MapProps = {
  mapRef: MutableRefObject<GoogleMap | undefined>;
};

export default function Map({ mapRef }: MapProps) {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const directions = useAppSelector(selectDirections);
  const dispatch = useAppDispatch();

  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 38.4145, lng: 27.1441 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );

  const onLoad = useCallback((map: any) => (mapRef.current = map), [mapRef]);

  const fetchDirections = () => {
    if (!origin) return;
    if (!destination) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          dispatch(setDirections(result));
        }
      }
    );
  };

  return (
    <div className="w-full">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
        options={options}
        onLoad={onLoad}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 500,
                strokeColor: "#202020",
                strokeWeight: 5,
              },
              markerOptions: {},
            }}
          />
        )}

        {origin && (
          <Marker
            position={origin}
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          />
        )}
        {destination && (
          <Marker
            position={destination}
            icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          />
        )}
      </GoogleMap>
      <div className="w-fit" onClick={() => fetchDirections()}>
        <Button title="Create Directions" />
      </div>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
