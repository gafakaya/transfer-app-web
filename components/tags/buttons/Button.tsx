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
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center p-1 rounded-md
      text-center
      text-sm
      bg-skin-secondary
      select-none cursor-pointer
      transition-all duration-200
      ${className}
      w-full
      ${defaultHover == true ? "hover:bg-skin-tertiary hover:shadow-sm" : ""} `}
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
