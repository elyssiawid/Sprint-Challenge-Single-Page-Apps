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
      </CardBody>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid gray;
  color: darkblue;
  margin-bottom: 20px;
  padding: 20px;
  text-align: center;
  :hover {
    color: red;
  }
`;
