import {
  BanknotesIcon,
  BeakerIcon,
  ExclamationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React from "react";
import { Button, IconButton, NavButton } from "../components/tags/buttons";

type Props = {};

const Test: NextPage = (props: Props) => {
  return (
    <div className={`flex gap-2`}>
      <Button title="Next step" type="button" size="small" />
      <Button title="Next step" type="button" size="middle" />
      <Button title="Next step" type="button" size="large" />
    </div>
  );
};

export default Test;
