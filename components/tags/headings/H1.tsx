import React from "react";
import { HeadingProps } from "./HeadingProps";

const H1 = ({ children, className }: HeadingProps) => {
  return (
    <div className={`text-2xl font-bold p-0.5 ${className} `}>
      {children}
    </div>
  );
};

export default H1;
