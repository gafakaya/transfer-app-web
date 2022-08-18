import axios from "axios";
import React, { useEffect, useState } from "react";
import { H1, H2 } from "../../tags";
import { v4 as uuidv4 } from "uuid";
import PhoneNumber from "./PhoneNumber";

type Props = {};

type CountyFlagsAndCodesType = {
  flag: string;
  code: number;
};

const UserCred = (props: Props) => {
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

  console.log(countryState);

  return (
    <div>
      <H1 className="">Credentials</H1>
      <div>
        {/* PHONE NUMBER */}
        <H2>Phone Number</H2>
        <PhoneNumber />
      </div>
    </div>
  );
};

export default UserCred;
