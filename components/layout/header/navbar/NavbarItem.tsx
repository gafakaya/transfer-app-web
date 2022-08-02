import { useRouter } from "next/router";
import React from "react";

type NavbarItemProps = {
  Icon: any;
  title: string;
  route: string;
};

const NavbarItem = ({ Icon, title, route }: NavbarItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${route}`)}
      className={`flex flex-col justify-center items-center group cursor-pointer
      border-b-2 border-skin-primary border-opacity-0 hover:border-opacity-100
      ${router.asPath === `${route}` ? "border-opacity-100" : ""}
      p-1`}
    >
      <Icon className="h-5" />
      <div className="text-sm select-none">{title}</div>
    </div>
  );
};

export default NavbarItem;
