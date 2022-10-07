import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../src/hooks/reduxHooks";
import {
  selectOwnUpToDateReservations,
  setOwnUpToDateReservations,
} from "../../../src/redux/slices/userSlice";
import getAllOwnUpToDateReservation from "../../../src/services/reservations/get-all-own-up-to-date-reservation";
import { Button, H2 } from "../../tags";
import ReservationModule from "./ReservationModule";

type OwnUpToDateReservationsProps = {};

const OwnUpToDateReservations = ({}: OwnUpToDateReservationsProps) => {
  const dispatch = useAppDispatch();
  const ownUpToDateReservations = useAppSelector(selectOwnUpToDateReservations);
  const router = useRouter();
  const [render, setRender] = useState(false);

  const handleRerender = () => {
    console.log("aa");
    setRender(!render);
  };

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
    <div>
      {ownUpToDateReservations?.length != 0 ? (
        <div>
          <H2>Up To Date Reservations</H2>
          {ownUpToDateReservations?.map((ownUpToDateReservation) => {
            return (
              <div key={ownUpToDateReservation.id}>
                <ReservationModule
                  type="uptodate"
                  reservation={ownUpToDateReservation}
                  handleRerender={handleRerender}
                />
              </div>
            );
          })}
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
