import { useRouter } from "next/router";
import React from "react";
import { IconButton } from "../../../tags/buttons";

type NavbarItemProps = {
  Icon: any;
  title: string;
  route: string;
};

const NavbarItem = ({ Icon, title, route }: NavbarItemProps) => {
  const router = useRouter();
  return (
    <div className="place-items-end group">
      <IconButton
        Icon={Icon}
        iconClassName={`h-[22px]`}
        className="bg-transparent"
        defaultHover={true}
        onClick={() => {
          router.push(`${route}`);
        }}
      />
      <span className="hidden">{title}</span>
    </div>
  );
};

export default NavbarItem;
