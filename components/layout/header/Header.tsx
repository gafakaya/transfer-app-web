import { MapIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Navbar } from "./navbar";

type Props = {};

const Header = (props: Props) => {
  const router = useRouter();

  return (
    <header
      className="sticky top-0 left-0 right-0 z-50 py-1.5
        bg-skin-primary
        border-b-[0.5px] border-gray-400"
    >
      <div className="flex justify-between items-center px-3 lg:px-0 mx-auto md:max-w-5xl">
        {/* <Image
          src={`/logo.svg`}
          width={`150`}
          height={`45`}
          alt={`memorytel-logo`}
          onClick={() => router.push("/")}
        ></Image> */}
        <div className="flex items-center gap-1 select-none cursor-pointer">
          <MapIcon className="h-8" />
          <span className="font-medium text-xl">Tenre</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
