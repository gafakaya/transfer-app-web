import { CalendarIcon } from "@heroicons/react/solid";
import { GoogleMap } from "@react-google-maps/api";
import { useRouter } from "next/router";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import { selectOrigin, setStage } from "../../../src/redux/slices/navSlice";
import { selectUser } from "../../../src/redux/slices/userSlice";
import { Places } from "../../places";
import { NavButton, H1 } from "../../tags";

type NavDestinationProps = {
  mapRef: MutableRefObject<GoogleMap | undefined>;
};

const NavDestination = ({ mapRef }: NavDestinationProps) => {
  const dispatch = useAppDispatch();
  const origin = useAppSelector(selectOrigin);
  const user = useAppSelector(selectUser);

  const router = useRouter();

  // useEffect(() => {
  //   if (!origin) dispatch(setStage("origin"));
  // }, [origin]);

  useEffect(() => {
    if (!user) {
      router.push("/auth/signin");
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-3 w-full">
      <H1>Where should we drop you off?</H1>
      <Places locType="destination" mapRef={mapRef} />
      <NavButton Icon={CalendarIcon} text="Next stage Date" />
    </div>
  );
};

export default NavDestination;
