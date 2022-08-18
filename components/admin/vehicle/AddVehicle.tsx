import { TruckIcon } from "@heroicons/react/outline";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import addVehicleImage from "../../../src/services/vehicles/add-vehicle-image";
import createVehicle, {
  VehicleDataType,
} from "../../../src/services/vehicles/create-vehicle";
import { Button } from "../../tags";
import { H2 } from "../../tags/headings";
import { Input } from "../../tags/inputs";

type Props = {};

const AddVehicle = (props: Props) => {
  const [file, setFile] = useState<File>();

  const handleCreateVehicle = async (createVehicleInput: VehicleDataType) => {
    let vehicleId = "";
    await createVehicle(createVehicleInput)
      .then((result: any) => {
        vehicleId = result.data.id;
        console.log(vehicleId);
      })
      .catch((err: any) => console.log(err));

    if (file == undefined) {
      console.log("File");
    } else {
      await addVehicleImage({ vehicleId, file })
        .then((result: any) => {
          console.log("2", vehicleId);
          console.log("Result", result);
        })
        .catch((err: any) => console.log(err));
    }
  };

  const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      console.error("Select a file");
      return;
    }

    setFile(e.target.files[0]!);

    // const reader = new FileReader();

    // reader.onloadend = () => {
    //   setImagePreviewUrl(reader.result);
    // };

    // reader.readAsDataURL(e.target.files[0]!);
  };

  return (
    <div className="flex justify-between">
      <div className="w-full">
        <H2>Add Vehicle</H2>
        <Formik
          initialValues={{
            vehicleName: "",
            vehicleDescription: "",
            capacity: "",
            basePrice: "",
          }}
          onSubmit={async (values) => {
            const createVehicleInput: VehicleDataType = { ...values };
            console.log(createVehicleInput);
            await handleCreateVehicle(createVehicleInput);
          }}
        >
          <Form
            className={`flex flex-col justify-center px-1 pb-4 mt-3 h-auto gap-2`}
          >
            <Input label="Vehicle Name" name="vehicleName" type="text" />

            <Input
              label="Vehicle Description"
              name="vehicleDescription"
              type="text"
            />
            <Input label="Capacity" name="capacity" type="text" />
            <Input label="Base Price" name="basePrice" type="text" />

            <div className={`flex flex-col gap-2 items-center mt-3 mb-2`}>
              <Button
                title="Add Vehicle"
                type="submit"
                LeftIcon={TruckIcon}
                className="text-sm"
                hover={"hover:text-white hover:bg-black"}
              />
            </div>
          </Form>
        </Formik>
      </div>
      <div>
        <input type={"file"} className="" onChange={fileChangedHandler} />
      </div>
    </div>
  );
};

export default AddVehicle;
