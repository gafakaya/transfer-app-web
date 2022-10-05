import {
  BanknotesIcon,
  BeakerIcon,
  ExclamationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React from "react";
import { IconButton, NavButton } from "../components/tags/buttons";

type Props = {};

const Test: NextPage = (props: Props) => {
  return (
    <div className={`flex gap-2`}>
      <IconButton Icon={BanknotesIcon} />
      <IconButton Icon={TrashIcon} />
    </div>
  );
};

export default Test;
