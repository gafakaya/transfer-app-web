import { NextPage } from "next";
import React from "react";
import { AdminPanel } from "../../components/admin";

type Props = {};

const Admin: NextPage = (props: Props) => {
  return (
    <div>
      <AdminPanel />
    </div>
  );
};

export default Admin;
