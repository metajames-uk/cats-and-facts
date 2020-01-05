import React from "react";
import { Button } from "../randomFactGenerator/Button";
import { Fact } from "../randomFactGenerator/Fact";

export const Index = ({ handleClick, randomFact }) => {
  return (
    <div className='Index'>
      <Button handleClick={handleClick} />
      <Fact randomFact={randomFact} />
    </div>
  );
};
