import {
  ChevronLeftIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import { User } from "../../../src/types/Auth";
import { Button } from "../../tags";

type AdminbarProps = {
  user: User | null;
};

const Adminbar = ({ user }: AdminbarProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center mx-auto md:max-w-5xl py-2 px-5 lg:px-1 bg-skin-secondary text-sm">
      {router.route == "/admin" ? (
        <div
          className="hover:bg-black hover:text-white rounded-md p-0.5 duration-300 transition-all"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon className="h-5" />
        </div>
      ) : (
        <div>
          <Button
            title="Admin Panel"
            type="button"
            LeftIcon={PresentationChartBarIcon}
            className="text-sm w-fit"
            onClick={() => router.push("/admin")}
          />
        </div>
      )}
      <div
        className="flex gap-1 cursor-pointer"
        onClick={() => {
          router.push("/profile");
        }}
      >
        <div>{user?.firstName}</div>
        <div>{user?.lastName}</div>
      </div>
    </div>
  );
};

export default Adminbar;
