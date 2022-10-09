import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  LeftIcon?: any;
  LeftIconClassName?: string;
  RightIcon?: any;
  RightIconClassName?: string;
  title: string;
  defaultHover?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.MouseEventHandler<HTMLDivElement>;
  size?: "small" | "middle" | "large";
};

const Button = ({
  type,
  LeftIcon,
  LeftIconClassName,
  RightIcon,
  RightIconClassName,
  title,
  defaultHover = true,
  className,
  onClick,
  onSubmit,
  size = "small",
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center bg-skin-secondary
      ${size == "small" && "p-1"}
      ${size == "middle" && "p-[6px]"} 
      ${size == "large" && "p-2"}
      rounded-md
      text-center text-sm select-none cursor-pointer
      transition-all duration-200
      w-full
      ${defaultHover == true ? "hover:bg-skin-tertiary hover:shadow-sm" : ""} 
      ${className} `}
      onSubmit={() => onSubmit}
      onClick={onClick}
      type={type}
    >
      <div className="flex items-center gap-1 mx-auto">
        {LeftIcon && <LeftIcon className={`h-5 ${LeftIconClassName}`} />}
        <div>{title}</div>
        {RightIcon && <RightIcon className={`h-5 ${RightIconClassName}`} />}
      </div>
    </button>
  );
};

export default Button;
