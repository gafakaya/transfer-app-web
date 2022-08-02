import React from "react";
import { Header } from "./header";

type Props = {};

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main className="flex mx-auto md:max-w-5xl py-2 px-3 lg:px-1">{children}</main>
    </div>
  );
};

export default Layout;
