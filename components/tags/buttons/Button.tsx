import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  LeftIcon?: any;
  LeftIconClassName?: string;
  RightIcon?: any;
  RightIconClassName?: string;
  title: string;
  hover?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: Function;
};

const Button = ({
  type,
  LeftIcon,
  LeftIconClassName,
  RightIcon,
  RightIconClassName,
  title,
  hover,
  className,
  onClick,
  onSubmit,
}: ButtonProps) => {
  return (
    <button
      className={`flex gap-[6px] items-center
      p-0.5 px-1.5 rounded-md
      text-center
      w-full
      border-2 border-skin-primary
      select-none cursor-pointer
      transition-all duration-200
      ${hover ? hover : "hover:text-white hover:bg-black"} ${className}`}
      onSubmit={() => onSubmit}
      onClick={onClick}
      type={type}
    >
      <div className="flex items-center gap-2 mx-auto">
        {LeftIcon && <LeftIcon className={`h-5 ${LeftIconClassName}`} />}
        <div>{title}</div>
        {RightIcon && <RightIcon className={`h-5 ${RightIconClassName}`} />}
      </div>
    </button>
  );
};

export default Button;
