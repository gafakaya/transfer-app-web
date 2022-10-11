import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import useAPICall from "../../../src/hooks/useAPICall";
import {
  selectAllUpToDateReservations,
  setAllUpToDateReservations,
} from "../../../src/redux/slices/settingSlice";
import getAllUpToDateReservation from "../../../src/services/reservations/get-all-up-to-date-reservation";
import ReservationList from "../../reservation/ReservationList";
import { H2 } from "../../tags";

type Props = {};

const AllUpToDateReservations = (props: Props) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setAllUpToDateReservations,
    apiFunc: getAllUpToDateReservation,
    select: selectAllUpToDateReservations,
  });
  const allUpToDateReservations = useAppSelector(selectAllUpToDateReservations);
  const router = useRouter();

  return (
    <>
      <H2>All Up To Date Reservations</H2>
      {allUpToDateReservations && (
        <ReservationList
          reservations={allUpToDateReservations}
          type={"uptodate" || "all"}
        />
      )}
    </>
  );
};

export default AllUpToDateReservations;
