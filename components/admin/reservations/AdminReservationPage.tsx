import { useState } from "react";
import { H3 } from "../../tags";
import AllPastReservations from "./AllPastReservations";
import AllUpToDateReservations from "./AllUpToDateReservations";

type Props = {};

const AdminReservationPage = (props: Props) => {
  const [filterByEmail, setFilterByEmail] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div>
        <H3>Filter by email</H3>
        <input
          name="Email"
          onChange={(e) => {
            setFilterByEmail(e.target.value);
            console.log(e.target.value);
          }}
          className={`rounded bg-skin-secondary w-full mr-1 p-1.5 outline-none border-0 text-sm focus:outline-none
        cursor-auto`}
        />
      </div>
      <hr className="border-skin-tertiary" />
      <AllUpToDateReservations filterByEmail={filterByEmail} />
      <hr className="border-skin-tertiary" />
      <AllPastReservations filterByEmail={filterByEmail} />
    </div>
  );
};

export default AdminReservationPage;
