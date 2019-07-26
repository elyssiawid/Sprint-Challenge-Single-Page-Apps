import React, { useEffect, useState } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const CharacterList = props => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/ - docs")
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getCharacters();
  }, []);
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
};

export default CharacterList;
