import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationsList = props => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          console.log("locations", response);
          setLocations(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getLocations();
  }, []);

  return (
    <section className="locations-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
};

export default LocationsList;
