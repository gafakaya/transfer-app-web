import React from "react";
import { HeadingProps } from "./HeadingProps";

const H2 = ({ children, className }: HeadingProps) => {
  return (
    <div className={`text-xl font-bold m-0.5 p-0.5 ${className} `}>
      {children}
    </div>
  );
};

export default H2;
