import React from "react";

type IconButtonProps = {
  Icon: any;
  iconClassName?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onSubmit?: React.MouseEventHandler<HTMLDivElement>;
  defaultHover?: boolean;
};

const IconButton = ({
  Icon,
  iconClassName,
  className,
  onClick,
  onSubmit,
  defaultHover,
}: IconButtonProps) => {
  return (
    <div
      className={`w-fit p-1 rounded-md bg-skin-secondary
        ${defaultHover == true ? "hover:bg-skin-tertiary hover:shadow-sm" : ""}
        transition-all duration-200 cursor-pointer ${className}`}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      <Icon className={`${iconClassName} h-6`} />
    </div>
  );
};

export default IconButton;
