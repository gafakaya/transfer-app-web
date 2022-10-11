import { NextPage } from "next";
import React from "react";
import { PricingSettings } from "../../components/admin/pricing";

type Props = {};

const Pricing: NextPage = (props: Props) => {
  return (
    <div>
      <PricingSettings />
    </div>
  );
};

export default Pricing;
