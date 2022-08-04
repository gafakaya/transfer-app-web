import { ArrowRightIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";

type NavButtonProps = {
  Icon: any;
  preText?: string;
  text: string;
  route?: string;
};

function NavButton({ Icon, preText, text, route }: NavButtonProps) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-2 w-32 bg-skin-secondary p-2 rounded select-none"
      onClick={() => route && router.push(`/${route}`)}
    >
      <Icon className="h-10" />
      <p>
        {preText}
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
