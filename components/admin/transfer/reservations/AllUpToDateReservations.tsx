import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../src/hooks/reduxHooks";
import {
  selectAllUpToDateReservations,
  setAllUpToDateReservations,
} from "../../../../src/redux/slices/settingSlice";
import getAllUpToDateReservation from "../../../../src/services/reservations/get-all-up-to-date-reservation";
import { H2 } from "../../../tags";

type Props = {};

const AllUpToDateReservations = (props: Props) => {
  const dispatch = useAppDispatch();
  const allUpToDateReservations = useAppSelector(selectAllUpToDateReservations);
  const router = useRouter();

  useEffect(() => {
    if (allUpToDateReservations == null) {
      const getAOUTDR = async () => {
        const result = await getAllUpToDateReservation();
        dispatch(setAllUpToDateReservations(result?.data));
      };
      getAOUTDR();
    }
  }, [allUpToDateReservations, dispatch]);
  return (
    <>
      <H2>All Up To Date Reservations</H2>
      {allUpToDateReservations?.map((allUpToDateReservation) => {
        return (
          <div
            key={allUpToDateReservation.id}
            className={`bg-skin-secondary mt-2 p-2 rounded-md 
            cursor-pointer hover:bg-opacity-80`}
          >
            <div>{allUpToDateReservation.originName}</div>
            <div>{allUpToDateReservation.destinationName}</div>
            <div>{allUpToDateReservation.distanceText}</div>
            <div>{moment(allUpToDateReservation.departureDate).fromNow()}</div>
          </div>
        );
      })}
    </>
  );
};

export default AllUpToDateReservations;
