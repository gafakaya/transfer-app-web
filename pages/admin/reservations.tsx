import { NextPage } from "next";
import React from "react";
import { AdminReservationPage } from "../../components/admin/reservations";

type Props = {};

const Reservations: NextPage = (props: Props) => {
  return (
    <div>
      <AdminReservationPage />
    </div>
  );
};

export default Reservations;
