import { NextPage } from "next";
import { useRouter } from "next/router";
import { OwnUpToDateReservations, ProfilePage } from "../../components/profile";
import { Button, H1 } from "../../components/tags";
import { UserElement } from "../../components/user";

type Props = {};

const Profile: NextPage = () => {
  const router = useRouter();
  return <ProfilePage />;
};

export default Profile;
