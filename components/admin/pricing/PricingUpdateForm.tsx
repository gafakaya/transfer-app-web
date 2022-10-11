import { Form, Formik } from "formik";
import createPricing, {
  CreatePricingDataType,
} from "../../../src/services/pricing/create-pricing";
import updatePricing, {
  UpdatePricingDataType,
} from "../../../src/services/pricing/update-pricing";
import { Button, H2 } from "../../tags";
import { Input } from "../../tags/inputs";
import { UpdateType } from "./PricingSettings";

type PricingUpdateFormProps = {
  update: UpdateType;
  setUpdate: React.Dispatch<React.SetStateAction<UpdateType>>;
};

const PricingUpdateForm = ({ update, setUpdate }: PricingUpdateFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          litrePerKm: update.updatePricing?.litrePerKm,
          costPerGasLitre: update.updatePricing?.costPerGasLitre,
          pricePerKm: update.updatePricing?.pricePerKm,
        }}
        onSubmit={async (values) => {
          const id = update.updatePricing?.id;
          if (!id) return;
          const updatePricingInput: UpdatePricingDataType = { ...values };
          console.log(updatePricingInput);
          await updatePricing(id, updatePricingInput).then((result) => {
            console.log(result);
            setUpdate({
              isUpdating: false,
              updatePricing: null,
            });
          });
        }}
      >
        <Form className={`flex flex-col justify-center h-auto gap-2 w-1/2`}>
          <H2>Update pricing</H2>
          <Input name="litrePerKm" label="Litre Per Km" />
          <Input name="costPerGasLitre" label="Cost Per Gas Litre" />
          <Input name="pricePerKm" label="Price Per Km" />
          <div className={`flex flex-col gap-2 items-center mt-3 mb-2`}>
            <Button title="Update Pricing" type="submit" className="text-sm" />
            <Button
              title="Cancel"
              type="button"
              onClick={() => {
                setUpdate({ isUpdating: false, updatePricing: null });
              }}
              className="text-sm hover:bg-skin-red"
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PricingUpdateForm;
