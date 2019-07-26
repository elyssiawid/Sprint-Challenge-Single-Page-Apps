import React, { useEffect, useState } from "react";
import axios from "axios";

const EpisodesList = props => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const getEpisodes = () => {
      axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(response => {
          console.log("episodes", response);
          setEpisodes(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getEpisodes();
  }, []);

  return (
    <section className="episode-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
};

export default EpisodesList;
