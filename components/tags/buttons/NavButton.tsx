import { ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";

type NavButtonProps = {
  Icon: any;
  text: string;
};

function NavButton({ Icon, text }: NavButtonProps) {
  return (
    <div className="flex flex-col gap-2 w-fit bg-skin-secondary p-2 rounded select-none">
      <Icon className="h-10" />
      <p>
        Continue with
        <br />
        {text}
      </p>
      <div className="w-fit rounded-full bg-black p-2">
        <ArrowRightIcon className="text-white h-5" />
      </div>
    </div>
  );
}

export default NavButton;
