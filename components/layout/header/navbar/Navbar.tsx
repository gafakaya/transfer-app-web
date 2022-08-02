import React from "react";
import NavbarItem from "./NavbarItem";
import {
  HomeIcon,
  LocationMarkerIcon,
  PhoneIncomingIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={`flex gap-4 justify-between items-center`}>
      <NavbarItem Icon={HomeIcon} title="Home" route="/" />
      <NavbarItem
        Icon={LocationMarkerIcon}
        title="Locations"
        route="/locations"
      />
      <NavbarItem Icon={UserGroupIcon} title="About Us" route="/about" />
      <NavbarItem Icon={PhoneIncomingIcon} title="Contact" route="/contact" />
    </nav>
  );
};

export default Navbar;
