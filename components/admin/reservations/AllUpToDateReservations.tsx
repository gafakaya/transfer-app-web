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
import { H2, H3 } from "../../tags";

type AllUpToDateReservationsProps = {
  filterByEmail?: string;
};

const AllUpToDateReservations = ({
  filterByEmail,
}: AllUpToDateReservationsProps) => {
  const dispatch = useAppDispatch();
  useAPICall({
    setState: setAllUpToDateReservations,
    apiFunc: getAllUpToDateReservation,
    select: selectAllUpToDateReservations,
  });
  const allUpToDateReservations = useAppSelector(selectAllUpToDateReservations);
  const router = useRouter();

  return (
    <div>
      <H3>All Up To Date Reservations</H3>
      {allUpToDateReservations && (
        <ReservationList
          reservations={allUpToDateReservations}
          type={"uptodate" || "all"}
          filterByEmail={filterByEmail}
        />
      )}
    </div>
  );
};

export default AllUpToDateReservations;
