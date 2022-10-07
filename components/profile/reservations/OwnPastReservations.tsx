import {
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectOwnPastReservations,
  selectOwnUpToDateReservations,
  setOwnPastReservations,
  setOwnUpToDateReservations,
} from "../../../src/redux/slices/userSlice";
import getAllOwnPastReservation from "../../../src/services/reservations/get-all-own-past-reservation";
import getAllOwnUpToDateReservation from "../../../src/services/reservations/get-all-own-up-to-date-reservation";
import { Button, H2 } from "../../tags";
import ReservationModule from "./ReservationModule";

type Props = {};

const OwnPastReservations = (props: Props) => {
  const dispatch = useAppDispatch();
  const ownPastReservations = useAppSelector(selectOwnPastReservations);
  const router = useRouter();

  useEffect(() => {
    if (ownPastReservations == null) {
      const getAOUTDR = async () => {
        const result = await getAllOwnPastReservation();
        dispatch(setOwnPastReservations(result?.data));
      };
      getAOUTDR();
    }
  }, [ownPastReservations, dispatch]);

  return (
    <div>
      {ownPastReservations?.length != 0 ? (
        <div>
          <H2>Past Reservations</H2>
          {ownPastReservations?.map((ownPastReservation) => {
            return (
              <div key={ownPastReservation.id}>
                <ReservationModule
                  type="past"
                  reservation={ownPastReservation}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default OwnPastReservations;
