import {
  ArrowNarrowDownIcon,
  CalendarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectDestination,
  selectOrigin,
  selectTimestamp,
} from "../../../src/redux/slices/navSlice";
import {
  selectVehicles,
  setSelectedVehicle,
  setVehicles,
} from "../../../src/redux/slices/vehicleSlice";
import getVehicles from "../../../src/services/vehicles/get-vehicles";
import { Vehicle } from "../../../src/types/Vehicle";
import { Button } from "../../tags";
import { H2 } from "../../tags/headings";
import moment from "moment";
import { timeStamp } from "console";
import { selectUser } from "../../../src/redux/slices/userSlice";
import VehicleModule from "./VehicleModule";

type Props = {};

const SelectVehicle = (props: Props) => {
  const dispatch = useAppDispatch();
  const vehicles = useAppSelector(selectVehicles);
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const timestamp = useAppSelector(selectTimestamp);
  const user = useAppSelector(selectUser);
  const router = useRouter();
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    if (vehicles == null) {
      const vehicles = async () => {
        const result = await getVehicles();
        dispatch(setVehicles(result?.data));
      };
      vehicles();
    }

    if (origin == null || destination == null || timestamp == null) {
      router.push("/");
    }
  }, [vehicles, origin, destination, dispatch, timestamp, router]);

  const handleSelectVehicle = (vehicle: Vehicle) => {
    dispatch(setSelectedVehicle(vehicle));
    if (!user) {
      router.push("credentials");
    } else {
      router.push("payment");
    }
  };

  useEffect(() => {
    const handleFormatDate = (timestamp: any) => {
      var date = new Date(timestamp);
      return date;
    };

    const date = handleFormatDate(timestamp);
    if (date) {
      setDate(date);
    }
  }, [timestamp]);

  return (
    <div className="flex flex-col items-start sm:flex-row gap-2">
      <div
        className="flex flex-col items-start my-2 mb-3 text-sm 
      w-2/6  bg-skin-secondary rounded-md"
      >
        <div className="pl-2 mb-4 w-full p-2">
          <H2 className="mb-1">Reservation Details</H2>
          <div className="flex justify-between items-center w-full pl-1">
            <div>Departure Date & Time :</div>
            <div>
              {/*TODO USE MOMENT FORMAT */}
              {date?.getDate()}/{date?.getMonth()}/{date?.getFullYear()} -{" "}
              {date?.getHours()}:{date?.getMinutes()}{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center p-2">
          <div>
            <LocationMarkerIcon className="h-6" />
          </div>
          <div className="">{origin?.name}</div>
        </div>

        <div className="items-center px-2">
          <ArrowNarrowDownIcon className="h-6" />
        </div>
        <div className="flex flex-row gap-1 items-center p-2">
          <div>
            <LocationMarkerIcon className="h-6" />
          </div>
          <div>{destination?.name}</div>
        </div>
      </div>
      <div className="flex-auto flex-col">
        {/* VEHICLES */}
        {vehicles?.map((vehicle) => {
          return (
            <VehicleModule
              key={vehicle.id}
              vehicle={vehicle}
              handleSelectVehicle={handleSelectVehicle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SelectVehicle;
