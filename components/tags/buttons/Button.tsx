import React from "react";

type ButtonProps = {
  LeftIcon?: any;
  RightIcon?: any;
  title: string;
  hover?: string;
  className?: string;
  onClick?: Function;
};

const Button = ({
  LeftIcon,
  RightIcon,
  title,
  hover,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={`flex gap-[6px] items-center
      p-0.5 px-1.5 rounded-md
      border-2 border-skin-primary
      select-none cursor-pointer
      transition-all duration-200
      ${hover} ${className}`}
      onClick={() => onClick}
    >
      {LeftIcon && <LeftIcon className={`h-5`} />}
      <div>{title}</div>
      {RightIcon && <RightIcon className={`h-5`} />}
    </div>
  );
};

export default Button;
