import { NextPage } from "next";
import React from "react";
import {
  OwnUpToDateReservations,
  OwnPastReservations,
} from "../../components/profile";

type Props = {};

const Reservations: NextPage = (props: Props) => {
  return (
    <div>
      <OwnUpToDateReservations />
      <OwnPastReservations />
    </div>
  );
};

export default Reservations;
