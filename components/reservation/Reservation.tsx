import { SearchIcon } from "@heroicons/react/outline";
import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import { selectState, setTimestamp } from "../../src/redux/slices/navSlice";
import { Places } from "../places";
import { Button, H1, NavButton } from "../tags";

type Props = {};

const Reservation = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const router = useRouter();

  const dispatch = useAppDispatch();
  const stage = useAppSelector(selectState);

  if (!isLoaded) return <div>Loading...</div>;

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const timestamp = new Date(e.target.value).getTime();
    dispatch(setTimestamp(timestamp));
  };

  return (
    <div className="flex flex-col gap-2 mt-2 mx-auto">
      <div className="flex justify-center gap-2 md:max-w-md">
        <div className="w-full">
          <Button
            LeftIcon={LocationMarkerIcon}
            title="Transfer"
            type="button"
          />
        </div>
        <div className="w-full">
          <Button LeftIcon={ClockIcon} title="Hourly Rental" type="button" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <div>
          <H1>Where can we pick you up?</H1>
          <Places locType="origin" />
        </div>
        <div>
          <H1>Where should we drop you off?</H1>
          <Places locType="destination" />
        </div>
        <div className="">
          <H1>Date?</H1>
          <input
            type={"datetime-local"}
            className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
            onChange={(e) => handleDate(e)}
          />
        </div>
        <div className="flex gap-3 text-sm">
          <div onClick={() => router.push("/reservation/vehicle")}>
            <NavButton Icon={SearchIcon} text="Search Transfer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
