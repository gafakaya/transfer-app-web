import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import useAPICall from "../../../src/hooks/useAPICall";
import {
  selectOwnUpToDateReservations,
  setOwnUpToDateReservations,
} from "../../../src/redux/slices/userSlice";
import getAllOwnUpToDateReservation from "../../../src/services/reservations/get-all-own-up-to-date-reservation";
import ReservationList from "../../reservation/ReservationList";
import { Button, H2, H3 } from "../../tags";
import { UpdateType } from "./OwnReservations";
import ReservationModule from "../../reservation/ReservationElement";

type OwnUpToDateReservationsProps = {
  setUpdate?: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const OwnUpToDateReservations = ({
  setUpdate,
}: OwnUpToDateReservationsProps) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setOwnUpToDateReservations,
    apiFunc: getAllOwnUpToDateReservation,
    select: selectOwnUpToDateReservations,
  });
  const ownUpToDateReservations = useAppSelector(selectOwnUpToDateReservations);
  const router = useRouter();
  const [render, setRender] = useState(false);

  const handleRerender = () => {
    console.log("aa");
    setRender(!render);
  };

  return (
    <div>
      {ownUpToDateReservations?.length != 0 ? (
        <div>
          <H3>Up To Date Reservations</H3>
          {ownUpToDateReservations && (
            <ReservationList
              reservations={ownUpToDateReservations}
              type="uptodate"
              handleRerender={handleRerender}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col w-full items-center gap-2 my-2 p-3 rounded-md text-center">
          <MagnifyingGlassIcon className="h-10" />
          <span>You do not have a up-to-date reservation</span>
          <div>
            <Button
              title="Create now"
              type="button"
              LeftIcon={PlusSmallIcon}
              className="w-fit border-2 bg-transparent border-skin-blue text-skin-blue hover:bg-skin-blue hover:text-skin-primary"
              onClick={() => router.push("/")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnUpToDateReservations;
