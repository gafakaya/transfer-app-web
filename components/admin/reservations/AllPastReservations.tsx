import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import useAPICall from "../../../src/hooks/useAPICall";
import {
  selectAllPastReservations,
  setAllPastReservations,
} from "../../../src/redux/slices/settingSlice";
import getAllPastReservation from "../../../src/services/reservations/get-all-past-reservation";
import ReservationList from "../../reservation/ReservationList";
import { H2, H3 } from "../../tags";

type AllPastReservationsProps = {
  filterByEmail?: string;
};

const AllPastReservations = ({ filterByEmail }: AllPastReservationsProps) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setAllPastReservations,
    apiFunc: getAllPastReservation,
    select: selectAllPastReservations,
  });
  const allPastReservations = useAppSelector(selectAllPastReservations);
  const router = useRouter();

  return (
    <div>
      <H3>All Past Reservations</H3>
      {allPastReservations && (
        <ReservationList
          reservations={allPastReservations}
          type={"past" || "all"}
          filterByEmail={filterByEmail}
        />
      )}
    </div>
  );
};

export default AllPastReservations;
