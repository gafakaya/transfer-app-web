import { NextPage } from "next";
import { useRouter } from "next/router";
import { OwnUpToDateReservations } from "../../components/profile";
import { Button, H1 } from "../../components/tags";

type Props = {};

const Profile: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <H1>Profile</H1>
      <Button
        title="Go to reservations"
        type="button"
        className="mt-2 w-fit"
        onClick={() => {
          router.push("/profile/reservations");
        }}
      />
    </div>
  );
};

export default Profile;
