import {
  ArrowLongDownIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectDestination,
  selectDirections,
  selectOrigin,
  selectTimestamp,
  selectTotalPrice,
  setTotalPrice,
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
import { selectUser } from "../../../src/redux/slices/userSlice";
import VehicleModule from "./VehicleModule";
import { useDistance } from "../../../src/hooks/useDistance";
import { Price } from "../price";
import {
  selectActivePricing,
  selectPricing,
  setActivePricing,
} from "../../../src/redux/slices/settingSlice";
import getActivePricing from "../../../src/services/pricing/get-active-pricing";

type Props = {};

const SelectVehicle = (props: Props) => {
  const dispatch = useAppDispatch();
  const vehicles = useAppSelector(selectVehicles);
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const timestamp = useAppSelector(selectTimestamp);
  const directions = useAppSelector(selectDirections);
  const user = useAppSelector(selectUser);
  const activePricing = useAppSelector(selectActivePricing);
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const [cost, setCost] = useState<number>(0);

  useEffect(() => {
    if (vehicles == null) {
      const vehicles = async () => {
        const result = await getVehicles();
        dispatch(setVehicles(result?.data));
      };
      vehicles();
    }

    if (activePricing == null) {
      const getActivePricingFunc = async () => {
        const result = await getActivePricing();
        dispatch(setActivePricing(result?.data));
      };
      getActivePricingFunc();
    }

    if (
      origin == null ||
      destination == null ||
      timestamp == null ||
      directions == null
    ) {
      router.push("/admin");
    }
  }, [
    vehicles,
    origin,
    destination,
    dispatch,
    timestamp,
    directions,
    router,
    activePricing,
  ]);

  const handleSelectVehicle = (vehicle: Vehicle) => {
    dispatch(setSelectedVehicle(vehicle));
    dispatch(setTotalPrice(cost + vehicle.basePrice));
    if (!user) {
      router.push("credentials");
    } else {
      router.push("payment");
    }
  };

  return (
    <div className="flex flex-col items-start sm:flex-row gap-2">
      <div
        className="flex flex-col items-start my-2 mb-3 text-sm 
      w-2/6  bg-skin-secondary rounded-md"
      >
        <div className="pl-2 mb-4 w-full p-2">
          <H2 className="mb-1">Reservation Details</H2>
          <div className="flex flex-col justify-between w-full pl-1">
            <div>
              {moment(timestamp).format("dddd, MMMM Do YYYY, h:mm:ss A")}
            </div>
            <div>
              {directions && activePricing && (
                <Price
                  setCost={setCost}
                  activePricing={activePricing}
                  leg={directions.routes[0].legs[0]}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2 items-center p-2">
          <div>
            <MapPinIcon className="h-6" />
          </div>
          <div className="">{origin?.name}</div>
        </div>

        <div className="items-center px-2">
          <ArrowLongDownIcon className="h-6" />
        </div>
        <div className="flex flex-row gap-1 items-center p-2">
          <div>
            <MapPinIcon className="h-6" />
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
