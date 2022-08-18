import React from "react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { Input } from "../../tags/inputs";
import { Button } from "../../tags";
import { LoginIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "../../../src/hooks/reduxHooks";
import { setUser } from "../../../src/redux/slices/userSlice";
import localSignin, {
  SigninDataType,
} from "../../../src/services/auth/local-signin";

type Props = {};

const SigninForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (values) => {
        const loginUserInput: SigninDataType = { ...values };
        console.log(loginUserInput);
        await localSignin(loginUserInput)
          .then((result: any) => {
            dispatch(setUser(result));
            router.push("/");
          })
          .catch((err: any) => console.log(err));
      }}
    >
      <Form
        className={`flex flex-col justify-center px-6 pb-4 mt-3 h-auto gap-2`}
      >
        <Input label="Email" name="email" type="email" />

        <Input label="Password" name="password" type="password" />

        <div className={`flex flex-col gap-2 items-center mt-3 mb-2`}>
          <Button
            type="submit"
            LeftIcon={LoginIcon}
            title="Signin"
            className="gap-2 text-sm py-1 bg-black text-white"
          />
          <Button
            type="button"
            title="Signup"
            className="gap-2 text-sm py-1"
            onClick={() => router.push("/auth/signup")}
          />
        </div>
      </Form>
    </Formik>
  );
};

export default SigninForm;
