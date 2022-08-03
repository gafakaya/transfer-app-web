import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

type PlacesProps = {
  setOrigin: (position: google.maps.LatLngLiteral) => void;
};

const Places = ({ setOrigin }: PlacesProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(results[0]);
    setOrigin({ lat, lng });
  };

  return (
    <Combobox value={value} onChange={handleSelect} nullable>
      {({ open }) => (
        <>
          <div className="flex items-center w-full rounded bg-skin-secondary">
            <Combobox.Input
              autoFocus={true}
              disabled={!ready}
              onChange={(e) => setValue(e.target.value)}
              value={value}
              className="w-full mr-1 p-2 bg-skin-secondary outline-none  text-sm"
            />
            <LocationMarkerIcon className="m-2 h-6" />
          </div>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Combobox.Options static>
              {status === "OK" &&
                data.map(({ place_id, description }) => (
                  <Combobox.Option key={place_id} value={description}>
                    {({ active, selected }) => (
                      <li
                        className={`flex items-center bg-skin-secondary text-sm p-2 ${
                          active
                            ? "bg-skin-tertiary text-skin-secondary cursor-pointer"
                            : " text-skin-primary"
                        }`}
                      >
                        {selected && <CheckIcon className="h-4 m-2 " />}
                        {description}
                      </li>
                    )}
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </Transition>
        </>
      )}
    </Combobox>
  );
};

export default Places;
