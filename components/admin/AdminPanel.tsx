import { TruckIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";
import { Button, H1 } from "../tags";
import { PricingSettings } from "./transfer/pricing";
import { AddVehicle } from "./vehicle";

type Props = {};

const AdminPanel = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <H1 className="border-b-2 border-skin-secondary mb-4">Admin Panel</H1>
      {/* <AddVehicle /> */}
      <Button
        title="Go to reservations"
        type="button"
        className="mt-2 w-fit"
        onClick={() => {
          router.push("/admin/reservations");
        }}
      />
      <Button
        title="Go to pricing"
        type="button"
        className="mt-2 w-fit"
        onClick={() => {
          router.push("/admin/pricing");
        }}
      />
    </div>
  );
};

export default AdminPanel;
