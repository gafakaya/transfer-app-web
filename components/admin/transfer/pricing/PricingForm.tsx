import { Form, Formik } from "formik";
import createPricing, {
  CreatePricingDataType,
} from "../../../../src/services/pricing/create-pricing";
import { Button, H2 } from "../../../tags";
import { Input } from "../../../tags/inputs";

type PricingFormProps = {
  setCreate: React.Dispatch<React.SetStateAction<boolean>>;
};

const PricingForm = ({ setCreate }: PricingFormProps) => {
  const handleAddPricing = () => {};

  return (
    <div>
      <Formik
        initialValues={{
          litrePerKm: 0,
          costPerGasLitre: 0,
          pricePerKm: 0,
        }}
        onSubmit={async (values) => {
          const createPricingInput: CreatePricingDataType = { ...values };
          console.log(createPricingInput);
          await createPricing(createPricingInput).then((result) => {
            console.log(result);
            setCreate(false);
          });
        }}
      >
        <Form className={`flex flex-col justify-center h-auto gap-2 w-1/2`}>
          <H2>Add pricing</H2>
          <Input name="litrePerKm" label="Litre Per Km" />
          <Input name="costPerGasLitre" label="Cost Per Gas Litre" />
          <Input name="pricePerKm" label="Price Per Km" />
          <div className={`flex flex-col gap-2 items-center mt-3 mb-2`}>
            <Button title="Add Pricing" type="submit" className="text-sm" />
            <Button
              title="Cancel"
              type="button"
              className="text-sm hover:bg-skin-red"
              onClick={() => {
                setCreate(false);
              }}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PricingForm;
