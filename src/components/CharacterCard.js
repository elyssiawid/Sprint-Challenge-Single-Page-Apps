import React from "react";
import styled from "styled-components";
import { CardBody } from "reactstrap";

export default function CharacterCard({ character }) {
  // return c
  console.log("characterprops", character);
  return (
    <Card>
      <CardBody>
        <img src={character.image} />
        <h3>{character.name}</h3>
        <p>{character.status}</p>
        <p>{character.location.name}</p>
        <p>{character.origin.name}</p>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  margin-bottom: 20px;
  padding: 20px;
  :hover {
    color: red;
  }
`;
