import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import { selectUser, setUser } from "../../src/redux/slices/userSlice";
import userMe from "../../src/services/users/user-me";
import { Role } from "../../src/types/Auth";
import Adminbar from "./admin/Adminbar";
import { Header } from "./header";

type Props = {};

const Layout = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

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
    <div>
      <Header />
      <main className="mx-auto md:max-w-5xl py-2 px-5 lg:px-1">{children}</main>
    </div>
  );
};

export default Layout;
