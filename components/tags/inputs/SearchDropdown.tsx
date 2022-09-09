import React, {
  useState,
  useRef,
  useEffect,
  MutableRefObject,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react";
import { PhoneType } from "../../../src/types/Phone";

type SearchDropdownProps = {
  options: PhoneType[];
  onInputChange: ChangeEventHandler<HTMLInputElement>;
  setSelectedCountry: any;
};

const SearchDropdown = ({
  options,
  onInputChange,
  setSelectedCountry,
}: SearchDropdownProps) => {
  const ulRef = useRef() as MutableRefObject<HTMLUListElement>;
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  return (
    <div className="flex flex-col max-w-md">
      <input
        id="search-bar"
        type="text"
        className="bg-skin-secondary p-2 text-sm"
        placeholder="Search"
        ref={inputRef}
        onChange={onInputChange}
        onClick={() => {
          ulRef.current.style.display = "flex";
        }}
      />
      <ul id="results" className="flex flex-col items-start my-2" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className="bg-skin-secondary p-2 text-sm w-full hover:bg-skin-tertiary cursor-pointer"
              onClick={(e) => {
                inputRef.current.value = option.name.common;
                setSelectedCountry(option);
                ulRef.current.style.display = "none";
              }}
            >
              {option.name.common}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchDropdown;
