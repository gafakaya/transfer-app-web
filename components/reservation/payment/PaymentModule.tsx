import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { Button, H1 } from "../../tags";
import { Input } from "../../tags/inputs";

type Props = {};

const PaymentModule = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <H1>PAYMENT</H1>
      <Formik
        initialValues={{
          cardNumber: "",
          nameOnCard: "",
          expirationDateMonth: "",
          expirationDateYear: "",
          cvc: "",
        }}
        onSubmit={async (values) => {
          console.log("Values", values);
        }}
      >
        <Form className="space-y-2 max-w-md">
          <Input name="cardNumber" placeholder="Card Number" />
          <Input name="nameOnCard" placeholder="Name on Card" />
          <Input name="expirationDateMonth" placeholder="Month" />
          <Input name="expirationDateYear" placeholder="Year" />
          <Input name="cvc" placeholder="CVC" />
          <div onClick={() => router.push("create")}>
            <Button title="Confirm and continue" type="submit" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentModule;
