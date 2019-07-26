import React from "react";
import LocationsList from "./LocationsList";
import styled from "styled-components";
import { CardBody } from "reactstrap";

export default function LocationCard(props) {
  return (
    <Card>
      <CardBody>
        <span>{props.location.name}</span>
        <span>{props.location.type}</span>
        <span>{props.location.dimension}</span>
        <span>{props.location.residents}</span>
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 3px;
  border: 2px solid gray;
  color: darkblue;
  margin-bottom: 20px;
  padding: 20px;
  :hover {
    color: red;
  }
`;
