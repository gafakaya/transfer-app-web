import {
  BanknotesIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  MapIcon,
  MapPinIcon,
  PencilSquareIcon,
  ShoppingBagIcon,
  TrashIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import moment from "moment";
import Image from "next/image";
import deleteReservation from "../../../src/services/reservations/delete-reservation";
import { Reservation } from "../../../src/types/Reservation";
import { IconButton } from "../../tags/buttons";
import { UpdateType } from "./OwnReservations";

type ReservationModuleProps = {
  reservation: Reservation;
  type: "uptodate" | "past";
  handleRerender: () => void;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const ReservationModule = ({
  reservation,
  type,
  handleRerender,
  setUpdate,
}: ReservationModuleProps) => {
  const { vehicle } = reservation;
  return (
    <div
      className={`flex flex-col gap-2 bg-skin-secondary mt-2 p-3 rounded-md Fhover:bg-opacity-80`}
    >
      <div className="flex justify-between my-1 text-sm w-full">
        <div className="flex flex-col gap-2  w-1/2">
          <div className="flex items-center gap-1.5">
            <div className="bg-skin-blue rounded-full w-5 h-5 outline-hidden"></div>
            <span className="w-full truncate">{reservation.originName}</span>
          </div>
          <div className="flex items-center gap-1.5 w-full">
            <MapPinIcon className="h-5" />
            <span className="w-full truncate">
              {reservation.destinationName}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end w-1/2">
          <div className="flex items-center gap-1.5">
            <MapIcon className="h-5" />
            <span className="w-full truncate">{reservation.distanceText}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ClockIcon className="h-5" />
            <span className="w-full truncate">{reservation.durationText}</span>
          </div>
        </div>
      </div>
      <hr className="border-skin-tertiary" />
      <div className="flex flex-col justify-between text-sm my-1">
        <div className="flex items-start gap-1.5 mb-1">
          <TruckIcon className="h-5" />
          <span className="">{vehicle?.vehicleName}</span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-1">
              <ShoppingBagIcon className="h-4" />
              Max {vehicle?.capacity}
            </div>
            <div className="flex items-center gap-1">
              <UserGroupIcon className="h-4" />
              Max {vehicle?.capacity}
            </div>
          </div>
          <Image
            width={100}
            height={60}
            src={`http://localhost:3001/vehicles/image/${vehicle?.imageName}`}
            alt="car"
          />
        </div>
      </div>
      <hr className="border-skin-tertiary" />
      <div className="flex justify-between text-sm mt-1">
        <div className="flex gap-1.5 items-center bg-skin-green px-2 py-0.5 rounded-lg">
          <BanknotesIcon className="h-5" />
          <span className="">{reservation.totalPrice}$</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm">
          <CalendarDaysIcon
            className={`h-5 ${
              type == "past" ? "text-skin-red" : "text-skin-blue"
            }`}
          />
          <span className="">
            <span>Departure </span>
            {type == "past" && " was "}
            {moment(reservation.departureDate).fromNow()}
          </span>
        </div>
      </div>
      {type == "uptodate" && (
        <div className="flex w-full justify-between gap-1">
          <div>
            <IconButton Icon={ChatBubbleBottomCenterTextIcon} />
          </div>
          <div className="flex  items-center gap-1">
            <IconButton
              Icon={TrashIcon}
              onClick={() => {
                deleteReservation(reservation.id);
                handleRerender();
              }}
            />
            <IconButton
              Icon={PencilSquareIcon}
              onClick={() => {
                setUpdate({
                  isUpdating: true,
                  updateReservation: reservation,
                });
                console.log("RR", reservation);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationModule;
