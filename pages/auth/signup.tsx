import { NextPage } from "next";
import React from "react";
import { SignupModule } from "../../components/auth/signup";

type Props = {};

const Signup: NextPage = (props: Props) => {
  return <SignupModule />;
};

export default Signup;
