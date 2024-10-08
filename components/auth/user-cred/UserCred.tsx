import axios from "axios";
import { useEffect, useState } from "react";
import { Button, H1, H2 } from "../../tags";
import PhoneNumber from "./PhoneNumber";
import { Form, Formik } from "formik";
import { Input } from "../../tags/inputs";
import { PhoneType } from "../../../src/types/Phone";
import localSignup, {
  SignupDataType,
} from "../../../src/services/auth/local-signup";
import { setCred, setUser } from "../../../src/redux/slices/userSlice";
import { useAppDispatch } from "../../../src/hooks/reduxHooks";
import { useRouter } from "next/router";
import { Cred } from "../../../src/types/Auth";

type Props = {};

type CountyFlagsAndCodesType = {
  flag: string;
  code: number;
};

const UserCred = (props: Props) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneIdd, setPhoneIdd] = useState<string>("");

  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div>
      <H1 className="border-b-2 border-skin-secondary mb-4">Credentials</H1>
      <div>
        <PhoneNumber
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          phoneIdd={phoneIdd}
          setPhoneIdd={setPhoneIdd}
        />
        <div className="border-b-2 border-skin-secondary mb-4"></div>
        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            trId: "",
          }}
          onSubmit={async (values) => {
            const cred: Cred = {
              ...values,
              phoneNumber,
              phoneIdd,
            };

            dispatch(setCred(cred));
            router.push("payment");
          }}
        >
          <Form className={`flex flex-col justify-center h-auto gap-2`}>
            <Input
              label="Email"
              placeholder="name@example.com"
              name="email"
              type="email"
            />

            <Input
              label="First Name"
              placeholder="First Name"
              name="firstName"
              type="text"
            />
            <Input
              label="Last Name"
              placeholder="Last Name"
              name="lastName"
              type="text"
            />

            <Input
              label="TR ID"
              placeholder="TR ID Number"
              name="trId"
              type="text"
            />

            <div className={`flex flex-col gap-2 items-center mt-3 mb-2`}>
              <Button
                type="submit"
                title="Next Step"
                size={"large"}
                className="gap-2 text-sm bg-black text-white"
                defaultHover={false}
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserCred;
