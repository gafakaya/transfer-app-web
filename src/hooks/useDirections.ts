import { useState, useEffect } from "react";
import { DirectionsResult } from "../types/googleMaps";

const useDirections = ({ origin, destination }: any) => {
  const [directions, setDirections] = useState<DirectionsResult>();

  useEffect(() => {
    if (!origin) return;
    if (!destination) return;
    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: origin.latLng,
        destination: destination.latLng,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  });

  return directions;
};

export default useDirections;
