import { ArrowRightIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type NavButtonProps = {
  Icon: any;
  text: string;
  route?: string;
};

function NavButton({ Icon, text, route }: NavButtonProps) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-2 bg-skin-secondary p-2 rounded select-none"
      onClick={() => route && router.push(`/${route}`)}
    >
      <Image width={100} height={56} src="/car.png" alt="car" />
      <p>{text}</p>
      <div className="w-fit rounded-full bg-black p-2">
        <ArrowRightIcon className="text-white h-5" />
      </div>
    </div>
  );
}

export default NavButton;
