import {
  PlusIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";
import React, { useCallback, useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../src/hooks/reduxHooks";
import {
  selectActivePricing,
  selectPricing,
  setActivePricing,
  setPricing,
} from "../../../../src/redux/slices/settingSlice";
import getActivePricing from "../../../../src/services/pricing/get-active-pricing";
import getAllPricing from "../../../../src/services/pricing/get-all-pricing";
import { Pricing } from "../../../../src/types/Pricing";
import { H1 } from "../../../tags";
import ActivePricing from "./ActivePricing";
import PricingForm from "./PricingForm";
import PricingList from "./PricingList";
import PricingUpdateForm from "./PricingUpdateForm";

type Props = {};

export type UpdateType = {
  isUpdating: boolean;
  updatePricing: Pricing | null;
};

const Pricing = (props: Props) => {
  const dispatch = useAppDispatch();
  const pricing = useAppSelector(selectPricing);
  const activePricing = useAppSelector(selectActivePricing);
  const [render, setRender] = useState(false);
  const [create, setCreate] = useState(false);
  const [update, setUpdate] = useState<UpdateType>({
    isUpdating: false,
    updatePricing: null,
  });

  const activePricingFunc = useCallback(async () => {
    const result = await getActivePricing();
    dispatch(setActivePricing(result?.data));
  }, [dispatch]);

  const pricingFunc = useCallback(async () => {
    const result = await getAllPricing();
    dispatch(setPricing(result?.data));
  }, [dispatch]);

  useEffect(() => {
    activePricingFunc();
    pricingFunc();
  }, [activePricingFunc, pricingFunc, render]);

  return (
    <div>
      <H1>Pricing Settings</H1>
      <div className="flex gap-2">
        <div
          className=" hover:bg-black hover:text-white
        rounded-md p-0.5 duration-300 transition-all"
          onClick={() => setRender(!render)}
        >
          <ArrowPathRoundedSquareIcon className="h-5" />
        </div>
        <div
          className=" hover:bg-black hover:text-white
        rounded-md p-0.5 duration-300 transition-all"
          onClick={() => setCreate(!create)}
        >
          <PlusIcon className="h-5" />
        </div>
      </div>
      {update.isUpdating && (
        <PricingUpdateForm update={update} setUpdate={setUpdate} />
      )}
      {create && <PricingForm setCreate={setCreate} />}
      <ActivePricing activePricing={activePricing} setUpdate={setUpdate} />
      <PricingList pricingList={pricing} setUpdate={setUpdate} />
    </div>
  );
};

export default Pricing;
