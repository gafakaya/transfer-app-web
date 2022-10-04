import { NextPage } from "next";
import React from "react";
import AllPastReservations from "../../components/admin/transfer/reservations/AllPastReservations";
import AllUpToDateReservations from "../../components/admin/transfer/reservations/AllUpToDateReservations";

type Props = {};

const Reservations: NextPage = (props: Props) => {
  return (
    <div>
      <AllUpToDateReservations />
      <AllPastReservations />
    </div>
  );
};

export default Reservations;
