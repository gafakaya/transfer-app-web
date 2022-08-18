import { NextPage } from "next";
import React from "react";
import { SelectVehicle } from "../../components/reservation";

type Props = {};

const Vehicle: NextPage = (props: Props) => {
  return (
    <div>
      <SelectVehicle />
    </div>
  );
};

export default Vehicle;
