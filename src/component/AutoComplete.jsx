import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const AutoComplete = ({ label, address, setAddress }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleGeocode = async () => {
    if (address.length > 2) {
      setVisible(true);
      const api_key = "ge-fcb0a64e92c5154d";
      const query =
        "https://api.geocode.earth/v1/autocomplete?" +
        `api_key=${api_key}&text=${address}`;

      fetch(query)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setVisible(false);
    }
  };
  return (
    <div>
      <div className="relative">
        <span className="absolute top-4 left-4 text-gray-400">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <input
          className="bg-white pl-10 w-full rounded-lg py-3 px-4 border border-gray-300 focus:outline-none focus:border-indigo-500 transition duration-150 ease-in-out"
          id="from-input"
          value={address}
          placeholder={label}
          type="text"
          onChange={(e) => {
            handleGeocode(e?.target?.value);
            setAddress(e?.target.value);
          }}
        />
        <div className="absolute top-[100%] flex flex-col  p-2 bg-white rounded-lg shadow-xl z-50 w-[100%] font-bold">
          {visible && data && (
            <>
              {data?.features?.map((e) => {
                return e.properties?.name ? (
                  <p
                    className="p-1 cursor-pointer"
                    onClick={() => {
                      setAddress(e?.properties?.name);
                      setVisible(false);
                    }}
                  >
                    <span className=" cursor-pointer text-gray-400 mr-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    {e?.properties?.name}
                  </p>
                ) : (
                  ""
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;
