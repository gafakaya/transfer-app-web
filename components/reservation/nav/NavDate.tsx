import { TruckIcon } from "@heroicons/react/solid";
import { GoogleMap } from "@react-google-maps/api";
import React, { ChangeEvent, MutableRefObject, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectDestination,
  setStage,
  setTimestamp,
} from "../../../src/redux/slices/navSlice";
import { NavButton, H1 } from "../../tags";

type NavDateProps = {
  mapRef: MutableRefObject<GoogleMap | undefined>;
};

const NavDate = ({ mapRef }: NavDateProps) => {
  const dispatch = useAppDispatch();
  const destination = useAppSelector(selectDestination);

  useEffect(() => {
    if (!destination) dispatch(setStage("destination"));
  }, [destination]);

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const timestamp = new Date(e.target.value).getTime();
    dispatch(setTimestamp(timestamp));
  };

  return (
    <div className="flex flex-col gap-3 w-full ">
      <H1>Where can we pick you up?</H1>
      <input
        type={"datetime-local"}
        className="rounded bg-skin-secondary w-full mr-1 p-2 outline-none border-0 text-sm"
        onChange={(e) => handleDate(e)}
      />
      <div
        className="flex gap-3 text-sm"
        onClick={() => dispatch(setStage("destination"))}
      >
        <NavButton Icon={TruckIcon} text="Next stage Vehicle" />
      </div>
    </div>
  );
};

export default NavDate;
