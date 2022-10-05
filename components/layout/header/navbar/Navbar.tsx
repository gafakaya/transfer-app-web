import React, { useEffect } from "react";
import NavbarItem from "./NavbarItem";
import {
  HomeIcon,
  MapPinIcon,
  UserGroupIcon,
  PhoneArrowDownLeftIcon,
  UserIcon,
  PresentationChartBarIcon,
  ArrowsRightLeftIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../src/hooks/reduxHooks";
import { selectUser, setUser } from "../../../../src/redux/slices/userSlice";
import userMe from "../../../../src/services/users/user-me";
import { Role } from "../../../../src/types/Auth";
import { Button } from "../../../tags";
import { useRouter } from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      const userCall = async () => {
        const result = await userMe();
        dispatch(setUser(result?.data));
      };
      userCall();
    }
  }, [user, dispatch]);

  const handleRoles = (roles: Role[] | any) => {
    const role = roles?.find((role: Role) => role.role == "admin");
    if (role) return true;
    return false;
  };

  return (
    <nav className={`flex gap-2 justify-between items-center`}>
      <NavbarItem Icon={HomeIcon} route="/" title="Home" />
      {handleRoles(user?.roles) && (
        <NavbarItem
          Icon={PresentationChartBarIcon}
          route="/admin"
          title="Profile"
        />
      )}
      {!user && (
        <Button
          title="Login"
          type="button"
          LeftIcon={ArrowLeftOnRectangleIcon}
          onClick={() => router.push("/auth/signin")}
        />
      )}
      {!user && (
        <Button
          title="SignUp"
          type="button"
          onClick={() => router.push("/auth/signup")}
        />
      )}
      {user && (
        <NavbarItem
          Icon={ArrowsRightLeftIcon}
          route="/profile/reservations"
          title="Reservations"
        />
      )}
      {user && <NavbarItem Icon={UserIcon} route="/profile" title="Profile" />}
    </nav>
  );
};

export default Navbar;
