import React from "react";
import { Reservation } from "../../src/types/Reservation";
import ReservationElement from "./ReservationElement";

export type ReservationTypes = "uptodate" | "past" | "all";

type ReservationListProps = {
  reservations: Reservation[];
  type: ReservationTypes;
  handleRerender?: () => void;
  filterByEmail?: string;
};

const ReservationList = ({
  reservations,
  type,
  handleRerender,
  filterByEmail,
}: ReservationListProps) => {
  return (
    <div>
      {reservations
        ?.filter((reservation) => {
          if (filterByEmail) {
            return reservation.user.email.includes(filterByEmail);
          } else {
            return reservation;
          }
        })
        .map((reservation) => {
          return (
            <div key={reservation.id}>
              <ReservationElement
                type={type}
                reservation={reservation}
                handleRerender={handleRerender}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ReservationList;
