import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const IncreaseNumber = () => {
    setNumber(number + 1);
  };
  const DecreaseNumber = () => {
    setNumber(number - 1);
  };

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={IncreaseNumber} variant="primary" size="lg" active>
        Increase{" "}
      </Button>{" "}
      <Button onClick={DecreaseNumber} variant="secondary" size="lg" active>
        Decrease
      </Button>
    </>
  );
};

export default Counter;
