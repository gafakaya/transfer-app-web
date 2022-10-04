import React from "react";
import { HeadingProps } from "./HeadingProps";

const H1 = ({ children, className }: HeadingProps) => {
  return (
    <div className={`text-2xl font-bold ${className} `}>
      {children}
    </div>
  );
};

export default H1;
