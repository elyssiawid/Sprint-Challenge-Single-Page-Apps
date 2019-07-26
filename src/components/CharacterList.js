import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log("hello", response);
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };
    getCharacters();
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <div>
          <CharacterCard key={character.id} character={character} />
          <Link to={`/characters/:id ${characters.id}`} />
        </div>
      ))}
    </section>
  );
};

export default CharacterList;
