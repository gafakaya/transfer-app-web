import { useLoadScript } from "@react-google-maps/api";
import { useRouter } from "next/router";
import { Places } from "../../places";
import { Button, H2 } from "../../tags";
import { UpdateType } from "./OwnReservations";

type UpdateReservationProps = {
  update: UpdateType;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const libraries: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];

const UpdateReservation = ({ update, setUpdate }: UpdateReservationProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const router = useRouter();
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex flex-col w-full gap-3 mt-2">
        <div>
          <H2>Where can we pick you up?</H2>
          <Places locType="origin" />
        </div>
        <div>
          <H2>Where should we drop you off?</H2>
          <Places locType="destination" />
        </div>
        <div className="">
          <H2>Date?</H2>
          <input
            type={"datetime-local"}
            className="rounded bg-skin-secondary w-full mr-1 p-2.5 outline-none border-0 text-sm"
            onChange={() => {}}
          />
        </div>
        <div className="flex gap-3 text-sm w-full ">
          <Button
            title="Set direction"
            type="button"
            onClick={() => {}}
            className="py-[8px]"
          />
          <Button
            title="Cancel"
            type="button"
            onClick={() => {
              setUpdate({ isUpdating: false, updateReservation: null });
            }}
            defaultHover={false}
            className="py-[8px] border-2 border-skin-red bg-transparent text-skin-red hover:bg-skin-red hover:text-skin-primary"
          />
          {/* <div onClick={() => nextStep()}>
          <NavButton Icon={MagnifyingGlassIcon} text="Search Transfer" />
        </div> */}
        </div>
        <div className="flex gap-3 text-sm w-full ">
          <Button
            title="Update"
            type="button"
            onClick={() => {}}
            defaultHover={false}
            className="py-[8px] border-2 border-skin-blue bg-transparent text-skin-blue hover:bg-skin-blue hover:text-skin-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateReservation;
