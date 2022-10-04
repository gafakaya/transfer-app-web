import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectOwnUpToDateReservations,
  setOwnUpToDateReservations,
} from "../../../src/redux/slices/userSlice";
import getAllOwnUpToDateReservation from "../../../src/services/reservations/get-all-own-up-to-date-reservation";
import { H2 } from "../../tags";

type Props = {};

const OwnUpToDateReservations = (props: Props) => {
  const dispatch = useAppDispatch();
  const ownUpToDateReservations = useAppSelector(selectOwnUpToDateReservations);
  const router = useRouter();

  useEffect(() => {
    if (ownUpToDateReservations == null) {
      const getAOUTDR = async () => {
        const result = await getAllOwnUpToDateReservation();
        dispatch(setOwnUpToDateReservations(result?.data));
      };
      getAOUTDR();
    }
  }, [ownUpToDateReservations, dispatch]);

  return (
    <>
      <H2>Up To Date Reservations</H2>
      {ownUpToDateReservations?.map((ownUpToDateReservation) => {
        return (
          <div
            key={ownUpToDateReservation.id}
            className={`bg-skin-secondary mt-2 p-2 rounded-md 
            cursor-pointer hover:bg-opacity-80`}
          >
            <div>{ownUpToDateReservation.originName}</div>
            <div>{ownUpToDateReservation.destinationName}</div>
            <div>{ownUpToDateReservation.distanceText}</div>
            <div>{moment(ownUpToDateReservation.departureDate).fromNow()}</div>
          </div>
        );
      })}
    </>
  );
};

export default OwnUpToDateReservations;
