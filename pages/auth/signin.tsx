import { NextPage } from "next";
import React from "react";
import { SigninModule } from "../../components/auth/signin";

type Props = {};

const Signin: NextPage = (props: Props) => {
  return <SigninModule />;
};

export default Signin;
