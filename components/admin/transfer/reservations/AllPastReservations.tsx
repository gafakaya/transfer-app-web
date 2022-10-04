import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../src/hooks/reduxHooks";
import {
  selectAllPastReservations,
  setAllPastReservations,
} from "../../../../src/redux/slices/settingSlice";
import getAllPastReservation from "../../../../src/services/reservations/get-all-past-reservation";
import { H2 } from "../../../tags";

type Props = {};

const AllPastReservations = (props: Props) => {
  const dispatch = useAppDispatch();
  const allPastReservations = useAppSelector(selectAllPastReservations);
  const router = useRouter();

  useEffect(() => {
    if (allPastReservations == null) {
      const getAOUTDR = async () => {
        const result = await getAllPastReservation();
        console.log(result);
        dispatch(setAllPastReservations(result?.data));
      };
      console.log("aa", allPastReservations);
      getAOUTDR();
    }
  }, [allPastReservations, dispatch]);
  return (
    <>
      <H2>All Past Reservations</H2>
      {allPastReservations?.map((allPastReservation) => {
        return (
          <div
            key={allPastReservation.id}
            className={`bg-skin-secondary mt-2 p-2 rounded-md 
            cursor-pointer hover:bg-opacity-80`}
          >
            <div>{allPastReservation.originName}</div>
            <div>{allPastReservation.destinationName}</div>
            <div>{allPastReservation.distanceText}</div>
            <div>{moment(allPastReservation.departureDate).fromNow()}</div>
          </div>
        );
      })}
    </>
  );
};

export default AllPastReservations;
