import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { IconButton } from "../../tags/buttons";
import OwnPastReservations from "./OwnPastReservations";
import OwnUpToDateReservations from "./OwnUpToDateReservations";

type Props = {};

const OwnReservations = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <OwnUpToDateReservations />
      <hr className="border-skin-tertiary" />
      <OwnPastReservations />
    </div>
  );
};

export default OwnReservations;
