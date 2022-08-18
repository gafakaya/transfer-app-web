import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { GoogleMap } from "@react-google-maps/api";
import React, { MutableRefObject } from "react";
import { useAppDispatch } from "../../../src/hooks/reduxHooks";
import { setStage } from "../../../src/redux/slices/navSlice";
import { Places } from "../../places";
import { NavButton, H1 } from "../../tags";

type NavOriginProps = {
  mapRef: MutableRefObject<GoogleMap | undefined>;
};

const NavOrigin = ({ mapRef }: NavOriginProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col w-full gap-3">
      <H1>Where can we pick you up?</H1>
      <Places locType="origin" />
    </div>
  );
};

export default NavOrigin;
