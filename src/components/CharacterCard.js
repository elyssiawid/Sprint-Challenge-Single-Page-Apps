import React from "react";
import styled from "styled-components";
import { CardBody } from "reactstrap";

export default function CharacterCard({ character }) {
  // return c
  console.log("characterprops", character);
  return (
    <Card>
      <CardBody>
        <h3>{character.name}</h3>
        <p>{character.status}</p>
        <p>{character.location}</p>
        <p>{character.origin}</p>
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
