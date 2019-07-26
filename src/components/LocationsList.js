import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Link } from "react-router-dom";

const LocationsList = props => {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const getLocations = () => {
      axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          console.log("locations", response);
          setLocations(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getLocations();
  }, []);

  return (
    <section className="location-list grid-view">
      {locations.map(location => (
        <div>
          <LocationCard key={location.id} location={location} />
          <Link to={`/locations/:id ${locations.id}`} />
        </div>
      ))}
    </section>
  );
};

export default LocationsList;
