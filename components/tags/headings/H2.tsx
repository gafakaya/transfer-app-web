import React from "react";
import { HeadingProps } from "./HeadingProps";

const H2 = ({ children, className }: HeadingProps) => {
  return <div className={`text-xl font-bold ${className} `}>{children}</div>;
};

export default H2;
