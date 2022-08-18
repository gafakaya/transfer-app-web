import React from "react";
import SigninForm from "./SigninForm";

type Props = {};

const SigninModule = (props: Props) => {
  return (
    <div
      className={`max-w-xs sm:max-w-sm mx-auto mt-10 border-2 border-skin-primary rounded-md shadow-md`}
    >
      <SigninForm />
    </div>
  );
};

export default SigninModule;
