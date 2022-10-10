import {
  CalendarDaysIcon,
  ClockIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import useAPICall from "../../../src/hooks/useAPICall";
import usePrice from "../../../src/hooks/usePrice";
import {
  selectOrigin,
  selectDestination,
  selectTimestamp,
  selectDirections,
  setTotalPrice,
} from "../../../src/redux/slices/navSlice";
import {
  setActivePricing,
  selectActivePricing,
} from "../../../src/redux/slices/settingSlice";
import { selectUser } from "../../../src/redux/slices/userSlice";
import { setSelectedVehicle } from "../../../src/redux/slices/vehicleSlice";
import getActivePricing from "../../../src/services/pricing/get-active-pricing";
import { Vehicle } from "../../../src/types/Vehicle";
import { H2 } from "../../tags";
import VehicleList from "../../vehicle/VehicleList";
import { Price } from "../price";

type Props = {};

const SelectVehicleStep = (props: Props) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setActivePricing,
    apiFunc: getActivePricing,
    select: selectActivePricing,
  });
  const activePricing = useAppSelector(selectActivePricing);
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const timestamp = useAppSelector(selectTimestamp);
  const directions = useAppSelector(selectDirections);
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (
      origin == null ||
      destination == null ||
      timestamp == null ||
      directions == null
    ) {
      console.log("Origin", origin);
      console.log("destination", destination);
      console.log("directions", directions);
      console.log("timestamp", timestamp);
      router.push("/");
    }
  }, [origin, destination, dispatch, timestamp, directions, router]);

  const handleSelectVehicle = (vehicle: Vehicle) => {
    dispatch(setSelectedVehicle(vehicle));
    console.log("Selected", vehicle);
    dispatch(setTotalPrice(price + vehicle.basePrice));
    if (!user) {
      router.push("credentials");
    } else {
      router.push("payment");
    }
  };

  return (
    <div className="flex flex-col justify-between sm:flex-row gap-1 sm:gap-2 w-full">
      {/* Reservation Details */}
      <div
        className="flex flex-col bg-skin-secondary 
        sm:w-1/2 p-2 rounded-md text-sm gap-1"
      >
        <H2>Reservation Details</H2>
        <div className="flex justify-between my-1 w-full">
          <div className="flex flex-col gap-1 w-1/2">
            <div className="flex items-center gap-1.5">
              <div className="bg-skin-blue rounded-full w-5 h-5 outline-hidden"></div>
              <span className="w-full truncate">{origin?.name}</span>
            </div>
            <div className="flex items-center gap-1.5 w-full">
              <MapPinIcon className="h-5" />
              <span className="w-full truncate">{destination?.name}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end w-1/2">
            <div className="flex items-center gap-1.5">
              <MapIcon className="h-5" />
              <span className="w-full truncate">
                {directions?.routes[0].legs[0].distance?.text}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <ClockIcon className="h-5" />
              <span className="w-full truncate">
                {directions?.routes[0].legs[0].duration?.text}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-0.5">
          <div className="flex items-center gap-1.5">
            <CalendarDaysIcon className="h-4" />
            {moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss A")}
          </div>
          <div className="w-fit">
            {directions && activePricing && (
              <Price
                setPrice={setPrice}
                activePricing={activePricing}
                leg={directions.routes[0].legs[0]}
              />
            )}
          </div>
        </div>
      </div>
      <div className="sm:w-1/2">
        <VehicleList handleSelectVehicle={handleSelectVehicle} />
      </div>
    </div>
  );
};

export default SelectVehicleStep;
