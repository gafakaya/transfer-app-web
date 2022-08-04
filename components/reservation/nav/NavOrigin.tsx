import { ClockIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { MutableRefObject, useRef } from "react";
import { useAppDispatch } from "../../../src/hooks/reduxHooks";
import { setStage } from "../../../src/redux/slices/navSlice";
import { Map } from "../../map";
import { Places } from "../../places";
import { NavButton, H1 } from "../../tags";

type NavOriginProps = {
  mapRef: MutableRefObject<GoogleMap | undefined>;
};

const NavOrigin = ({ mapRef }: NavOriginProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col gap-3">
      <H1>Where can we pick you up?</H1>
      <Places locType="origin" mapRef={mapRef} />
      <div
        className="flex gap-3 text-sm"
        onClick={() => dispatch(setStage("destination"))}
      >
        <NavButton
          Icon={LocationMarkerIcon}
          preText="Continue with"
          text="Transfer"
        />
        <NavButton
          Icon={ClockIcon}
          preText="Continue with"
          text="Hourly Rental"
        />
      </div>
    </div>
  );
};

export default NavOrigin;
