import { MagnifyingGlassIcon, TruckIcon } from "@heroicons/react/24/outline";
import {
  ClockIcon,
  MapPinIcon,
  XCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import {
  selectDestination,
  selectOrigin,
  selectState,
  setDirections,
  setReturnTimestamp,
  setTimestamp,
} from "../../src/redux/slices/navSlice";
import { setActivePricing } from "../../src/redux/slices/settingSlice";
import getActivePricing from "../../src/services/pricing/get-active-pricing";
import { Places } from "../places";
import { Button, H1, H2, NavButton } from "../tags";

type Props = {};

const Reservation = (props: Props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [isHourlyRental, setIsHourlyRental] = useState(false);

  const durations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [selectedDuration, setSelectedDuration] = useState();

  const router = useRouter();

  const dispatch = useAppDispatch();
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);

  if (!isLoaded) return <div>Loading...</div>;

  const handleDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    dateType: "departure" | "return"
  ) => {
    if (dateType == "departure") {
      const timestamp = new Date(e.target.value);
      dispatch(setTimestamp(timestamp));
    } else if (dateType == "return") {
      const timestamp = new Date(e.target.value);
      dispatch(setReturnTimestamp(timestamp));
    } else {
      console.log("Wrong date type");
    }
  };
  const fetchDirections = () => {
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
          dispatch(setDirections(result));
        }
      }
    );
  };

  const nextStep = () => {
    fetchDirections();
    router.push("/reservation/vehicle");
  };

  return (
    <div className="flex flex-col gap-2 mt-2 mx-auto">
      <div className="flex justify-center gap-2 md:max-w-xl">
        <div className="w-full" onClick={() => setIsHourlyRental(false)}>
          <Button LeftIcon={MapPinIcon} title="Transfer" type="button" />
        </div>

        <div className="w-full" onClick={() => setIsHourlyRental(true)}>
          <Button LeftIcon={ClockIcon} title="Hourly Rental" type="button" />
        </div>
      </div>

      {!isHourlyRental ? (
        <div>
          <div className="w-fit" onClick={() => setIsRoundTrip(!isRoundTrip)}>
            <Button
              LeftIcon={isRoundTrip ? XCircleIcon : CheckCircleIcon}
              title="Round Trip"
              type="button"
              className="border-none"
            />
          </div>
          <div className="flex flex-col w-full gap-3 mt-2">
            <div>
              <H2>Where can we pick you up?</H2>
              <Places locType="origin" />
            </div>
            <div>
              <H1>Where should we drop you off?</H1>
              <Places locType="destination" />
            </div>
            <div className="">
              <H2>Date?</H2>
              <input
                type={"datetime-local"}
                className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
                onChange={(e) => handleDate(e, "departure")}
              />
            </div>
            {isRoundTrip && (
              <div className="">
                <H2>Return Date?</H2>
                <input
                  type={"datetime-local"}
                  className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
                  onChange={(e) => handleDate(e, "return")}
                />
              </div>
            )}
            <div className="flex gap-3 text-sm w-1/2 ">
              <Button
                title="Next Step"
                type="button"
                RightIcon={TruckIcon}
                onClick={() => nextStep()}
                className="py-[10px]"
              />
              {/* <div onClick={() => nextStep()}>
                <NavButton Icon={MagnifyingGlassIcon} text="Search Transfer" />
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-3">
          <div>
            <H2>Where can we pick you up?</H2>
            <Places locType="origin" />
          </div>
          <div className="">
            <H1>Date?</H1>
            <input
              type={"datetime-local"}
              className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
              onChange={(e) => handleDate(e, "departure")}
            />
          </div>
          <div>
            <H1>Select Duration</H1>
            <select
              className="w-full bg-skin-secondary p-2"
              value={selectedDuration}
            >
              {durations.map((duration) => {
                return <option key={duration}>{duration} Hour</option>;
              })}
            </select>
          </div>
          <div className="flex gap-3 text-sm">
            <div onClick={() => nextStep()}>
              <NavButton Icon={MagnifyingGlassIcon} text="Search Hourly" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
