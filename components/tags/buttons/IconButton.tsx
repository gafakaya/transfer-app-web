import React from "react";

type IconButtonProps = {
  Icon: any;
  className?: string;
};

const IconButton = ({ Icon, className }: IconButtonProps) => {
  return (
    <div
      className={`${className} w-fit p-1 rounded-md bg-skin-secondary
        hover:bg-skin-tertiary hover:shadow-sm
        transition-all duration-200 cursor-pointer`}
    >
      <Icon className="h-6" />
    </div>
  );
};

export default IconButton;
