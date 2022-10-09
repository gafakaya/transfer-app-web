import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Reservation } from "../../../src/types/Reservation";
import { IconButton } from "../../tags/buttons";
import OwnPastReservations from "./OwnPastReservations";
import OwnUpToDateReservations from "./OwnUpToDateReservations";
import UpdateReservation from "./UpdateReservation";

type Props = {};

export type UpdateType = {
  isUpdating: boolean;
  updateReservation: Reservation | null;
};

const OwnReservations = (props: Props) => {
  const [update, setUpdate] = useState<UpdateType>({
    isUpdating: false,
    updateReservation: null,
  });

  return (
    <div className="flex flex-col gap-2">
      {update.isUpdating && (
        <UpdateReservation update={update} setUpdate={setUpdate} />
      )}
      <OwnUpToDateReservations setUpdate={setUpdate} />
      <hr className="border-skin-tertiary" />
      <OwnPastReservations />
    </div>
  );
};

export default OwnReservations;
