import React from "react";
import { HeadingProps } from "./HeadingProps";

const H3 = ({ children, className }: HeadingProps) => {
  return <div className={`text-lg font-bold ${className} `}>{children}</div>;
};

export default H3;
