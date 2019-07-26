import React from "react";
import LocationsList from "./LocationsList";
import styled from "styled-components";
import { CardBody } from "reactstrap";

export default function LocationCard(props) {
  return (
    <Card>
      <CardBody>
        <h3>{props.location.name}</h3>
        <p>Type: {props.location.type}</p>
        <p>Dimension: {props.location.dimension}</p>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 3px;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  border: 2px solid gray;
  color: gray;
  margin-bottom: 20px;
  padding: 20px;
  :hover {
    color: dodgerblue;
  }
`;
