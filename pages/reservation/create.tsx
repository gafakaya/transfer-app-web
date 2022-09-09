import { NextPage } from "next";
import React from "react";
import { CreateReservation } from "../../components/reservation/create";

type Props = {};

const Create: NextPage = (props: Props) => {
  return (
    <div>
      <CreateReservation />
    </div>
  );
};

export default Create;
