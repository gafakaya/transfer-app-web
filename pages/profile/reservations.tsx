import { NextPage } from "next";
import React from "react";
import {
  OwnUpToDateReservations,
  OwnPastReservations,
} from "../../components/profile";
import { OwnReservations } from "../../components/profile/reservations";

type Props = {};

const Reservations: NextPage = (props: Props) => {
  return <OwnReservations />;
};

export default Reservations;
