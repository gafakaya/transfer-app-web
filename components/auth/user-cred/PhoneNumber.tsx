import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { PhoneType } from "../../../src/types/Phone";
import { SearchDropdown } from "../../tags/inputs";
import { Button, H2 } from "../../tags";

type PhoneNumberProps = {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  phoneIdd: string;
  setPhoneIdd: React.Dispatch<React.SetStateAction<string>>;
};

const PhoneNumber = ({
  phoneNumber,
  setPhoneNumber,
  phoneIdd,
  setPhoneIdd,
}: PhoneNumberProps) => {
  const [countryState, setCountryState] = useState<{
    loading: boolean;
    countries: PhoneType[];
    errorMessage: string;
  }>({
    loading: false,
    countries: [],
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch spinner
        setCountryState({
          ...countryState,
          loading: true,
        });

        //  fetch data
        const dataUrl = `https://restcountries.com/v3.1/all?fields=name,idd,flags`;
        const response = await axios.get(dataUrl);
        setCountryState({
          ...countryState,
          countries: response.data,
          loading: false,
        });
      } catch (error) {
        setCountryState({
          ...countryState,
          loading: false,
          errorMessage: "Sorry Something went wrong",
        });
      }
    };

    fetchData();
  }, []);
  const { loading, errorMessage, countries } = countryState;
  const [selectedCountry, setSelectedCountry] = useState<PhoneType>();

  const [options, setOptions] = useState<PhoneType[]>([]);
  const onInputChange = (event: any) => {
    setOptions(
      countries.filter((option: PhoneType) =>
        option.name.common.includes(event.target.value)
      )
    );
  };

  return (
    <React.Fragment>
      <H2>Phone Number</H2>
      <div className="max-w-md">
        {loading === true ? (
          <div className="flex">
            <p className="text-sm">Loading...</p>
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <div>
              <SearchDropdown
                options={options}
                onInputChange={onInputChange}
                setSelectedCountry={setSelectedCountry}
              />
            </div>
            <div>
              {selectedCountry && (
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-2 items-center bg-skin-secondary p-1.5 rounded">
                    <Image
                      width={40}
                      height={26}
                      className="rounded-sm"
                      src={selectedCountry && selectedCountry.flags.png}
                      alt="flag"
                    />
                    <p className="text-sm font-bold">
                      {selectedCountry && selectedCountry.idd.root}
                      {selectedCountry && selectedCountry.idd.suffixes}
                    </p>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-[360px] h-[38px] text-sm p-2 outline-none rounded bg-skin-secondary"
                      onChange={(e) => {
                        setPhoneIdd(
                          `${selectedCountry.idd.root}${selectedCountry.idd.suffixes}`
                        );
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
            <div>
              {phoneNumber?.length == 10 && (
                <Button
                  title="Send code to my phone"
                  type="button"
                  className="text-sm mb-4"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PhoneNumber;
