import { NextPage } from "next";
import React from "react";
import { PaymentModule } from "../../components/payment";

type Props = {};

const Payment: NextPage = (props: Props) => {
  return (
    <>
      <PaymentModule />
    </>
  );
};

export default Payment;
