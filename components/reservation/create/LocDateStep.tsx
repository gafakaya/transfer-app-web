import { TruckIcon } from "@heroicons/react/24/outline";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import useDirections from "../../../src/hooks/useDirections";
import {
  selectOrigin,
  selectDestination,
  setTimestamp,
  setDirections,
} from "../../../src/redux/slices/navSlice";
import { Places } from "../../places";
import { H3, Button } from "../../tags";

type Props = {};

const libraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];

const LocDateStep = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const directions = useDirections({ origin, destination });

  if (!isLoaded) return <div>Loading...</div>;

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timestamp = new Date(e.target.value);
    dispatch(setTimestamp(timestamp));
  };

  const nextStep = () => {
    dispatch(setDirections(directions));
    router.push("/reservation/vehicle");
  };

  return (
    <div className="flex flex-col w-full gap-2 mt-2">
      <div>
        <H3>Where can we pick you up?</H3>
        <Places locType="origin" />
      </div>
      <div>
        <H3>Where should we drop you off?</H3>
        <Places locType="destination" />
      </div>
      <div className="">
        <H3>Date?</H3>
        <input
          type={"datetime-local"}
          className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
          onChange={(e) => handleDate(e)}
        />
      </div>
      <div className="flex gap-3 text-sm w-1/2 mt-1">
        <Button
          title="Next Step"
          type="button"
          RightIcon={TruckIcon}
          onClick={() => nextStep()}
          className="py-[10px]"
        />
      </div>
    </div>
  );
};

export default LocDateStep;
