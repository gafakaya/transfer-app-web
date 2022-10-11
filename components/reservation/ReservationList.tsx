import React from "react";
import { Reservation } from "../../src/types/Reservation";
import ReservationElement from "./ReservationElement";

export type ReservationTypes = "uptodate" | "past" | "all";

type ReservationListProps = {
  reservations: Reservation[];
  type: ReservationTypes;
  handleRerender?: () => void;
};

const ReservationList = ({
  reservations,
  type,
  handleRerender,
}: ReservationListProps) => {
  return (
    <div>
      {reservations?.map((reservations) => {
        return (
          <div key={reservations.id}>
            <ReservationElement
              type={type}
              reservation={reservations}
              handleRerender={handleRerender}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ReservationList;
