import React from "react";

type Props = {
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
};

const Label = ({ htmlFor, className, children }: Props) => {
  return (
    <label className={`${className} mb-1 font-bold select-none`}>
      {children}
    </label>
  );
};

export default Label;
