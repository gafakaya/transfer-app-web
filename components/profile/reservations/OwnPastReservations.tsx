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
import { H2 } from "../../tags";

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
    <>
      <H2>Past Reservations</H2>
      {ownPastReservations?.map((ownPastReservation) => {
        return (
          <div
            key={ownPastReservation.id}
            className={`bg-skin-secondary mt-2 p-2 rounded-md 
            cursor-pointer hover:bg-opacity-80`}
          >
            <div>{ownPastReservation.originName}</div>
            <div>{ownPastReservation.destinationName}</div>
            <div>{ownPastReservation.distanceText}</div>
            <div>{moment(ownPastReservation.departureDate).fromNow()}</div>
          </div>
        );
      })}
    </>
  );
};

export default OwnPastReservations;
