import React from "react";

export const Fact = ({ randomFact }) => {
  return (
    <div className='RandomFact'>
      {randomFact.length !== 0 && (
        <div>
          <p className=''>{randomFact.fact}</p>
        </div>
      )}
    </div>
  );
};
