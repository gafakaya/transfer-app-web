import { CalendarDaysIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import Image from "next/image";
import { User } from "../../src/types/Auth";

type UserElementProps = {
  user: User;
  showJoinDate?: boolean;
};

const UserElement = ({ user, showJoinDate = false }: UserElementProps) => {
  return (
    <div className="flex flex-col gap-3 text-sm bg-skin-secondary">
      <div className="flex justify-between items-center gap-2">
        <div className="flex flex-col items-start">
          <div className="flex gap-1 text-base">
            <span>{user.firstName}</span>
            <span>{user.lastName}</span>
          </div>
          <div className="flex items-center gap-1">
            <EnvelopeIcon className="h-5" />
            <span>{user.email}</span>
          </div>
        </div>
        {true ? (
          <Image
            src={"/karizma.jpg"}
            width={48}
            height={48}
            alt="pp"
            className="rounded-full"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-skin-tertiary mx-2">
            {/* Profile Photo */}
          </div>
        )}
      </div>
      {showJoinDate && (
        <div className="flex items-center gap-1">
          <CalendarDaysIcon className="h-5" />
          <span>Joined {moment(user.createdAt).fromNow()}</span>
        </div>
      )}
    </div>
  );
};

export default UserElement;
