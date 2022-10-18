import {
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import useAPICall from "../../../src/hooks/useAPICall";
import {
  selectOwnPastReservations,
  selectOwnUpToDateReservations,
  setOwnPastReservations,
  setOwnUpToDateReservations,
} from "../../../src/redux/slices/userSlice";
import getAllOwnPastReservation from "../../../src/services/reservations/get-all-own-past-reservation";
import getAllOwnUpToDateReservation from "../../../src/services/reservations/get-all-own-up-to-date-reservation";
import { Button, H2, H3 } from "../../tags";
import ReservationModule from "../../reservation/ReservationElement";
import ReservationList from "../../reservation/ReservationList";

type Props = {};

const OwnPastReservations = (props: Props) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setOwnPastReservations,
    apiFunc: getAllOwnPastReservation,
    select: selectOwnPastReservations,
  });
  const ownPastReservations = useAppSelector(selectOwnPastReservations);
  const router = useRouter();

  return (
    <div>
      {ownPastReservations?.length != 0 ? (
        <div>
          <H3>Past Reservations</H3>
          {ownPastReservations && (
            <ReservationList reservations={ownPastReservations} type="past" />
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default OwnPastReservations;
