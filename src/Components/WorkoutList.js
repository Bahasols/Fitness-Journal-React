import Exercise from "./Exercise";
import { Form, Button, Card } from "react-bootstrap";
import React, { useRef, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Container, Row } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

export function WorkoutList() {
  const [weeksButton, setWeeksButton] = useState("This week");

  return (
    <>
      <Container>
        <Exercise />
        <Exercise />
        <Exercise />
        <br />
      </Container>
    </>
  );
}
