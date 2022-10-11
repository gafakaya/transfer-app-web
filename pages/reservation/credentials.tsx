import { NextPage } from "next";
import React from "react";
import { UserCred } from "../../components/auth/user-cred";

type Props = {};

const Credentials: NextPage = (props: Props) => {
  return (
    <div>
      <UserCred />
    </div>
  );
};

export default Credentials;
