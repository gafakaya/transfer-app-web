import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

const PhoneNumber = () => {
  const [countryState, setCountryState] = useState({
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
        const dataUrl = `https://restcountries.com/v3.1/all`;
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
  console.log("loading", loading);
  console.log("countries", countries);
  console.log("errorMessage", errorMessage);

  const [selectedCountry, setSelectedCountry] = useState<any>();
  console.log("selectedCountry", selectedCountry);

  //   find selected country data
  //search selected country
  const searchSelectedCountry: any = countries.find((obj: any) => {
    if (obj.name.common === selectedCountry) {
      return true;
    }
    return false;
  });
  console.log("searchSelectedCountry", searchSelectedCountry);

  return (
    <React.Fragment>
      <div>
        <div>
          {loading === true ? (
            <div className="flex">
              <p className="text-sm">Loading...</p>
            </div>
          ) : (
            <div className="flex flex-col space-y-2">
              <div>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="outline-none w-[347px] bg-skin-secondary p-2 text-sm rounded"
                >
                  <option> Select Country </option>
                  {countries.map((item: any) => {
                    return (
                      <option key={uuidv4()} value={item.name.common}>
                        {item.name.common}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                {searchSelectedCountry && (
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-2 items-center bg-skin-secondary p-1.5 rounded">
                      <Image
                        width={40}
                        height={26}
                        className="rounded-sm"
                        src={
                          searchSelectedCountry &&
                          searchSelectedCountry.flags.png
                        }
                        alt="flag"
                      />
                      <p className="text-sm font-bold">
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.root}
                        {searchSelectedCountry &&
                          searchSelectedCountry.idd.suffixes}
                      </p>
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="w-64 h-[38px] text-sm p-2 outline-none rounded bg-skin-secondary"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default PhoneNumber;
