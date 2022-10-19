import { useRouter } from "next/router";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../src/hooks/reduxHooks";
import useAPICall from "../../src/hooks/useAPICall";
import { selectUser, setUser } from "../../src/redux/slices/userSlice";
import logout from "../../src/services/auth/logout";
import userMe from "../../src/services/users/user-me";
import { H1, Button } from "../tags";
import { UserElement } from "../user";

type Props = {};

const ProfilePage = (props: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  useAPICall({
    setState: setUser,
    apiFunc: userMe,
    select: selectUser,
  });
  const user = useAppSelector(selectUser);

  const handleLogout = async () => {
    await logout().then((result) => {
      if (result?.data == true) {
        dispatch(setUser(null));
        router.push("/");
      }
    });
  };

  if (user == null) return <div></div>;

  return (
    <div>
      <div className="p-2 bg-skin-secondary rounded-md">
        <UserElement user={user} showJoinDate={true} />
      </div>
      <Button
        title="Go to reservations"
        type="button"
        className="mt-2 w-fit"
        size="large"
        onClick={() => {
          router.push("/profile/reservations");
        }}
      />
      <Button
        title="Logout"
        type="button"
        className="mt-2 w-fit"
        size="large"
        onClick={() => handleLogout()}
      />
    </div>
  );
};

export default ProfilePage;
