import { TruckIcon } from "@heroicons/react/outline";
import React from "react";
import { Button, H1 } from "../tags";
import { AddVehicle } from "./vehicle";

type Props = {};

const AdminPanel = (props: Props) => {
  return (
    <div className="flex flex-col">
      <H1 className="border-b-2 border-skin-secondary mb-4">Admin Panel</H1>
      <AddVehicle />
    </div>
  );
};

export default AdminPanel;
