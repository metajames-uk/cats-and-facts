import React from "react";

export const Button = ({ handleClick }) => {
  return (
    <div className='RandomGenerateFact'>
      <button onClick={handleClick}>
        Give me fact <span className='icon-paw-print'></span>
      </button>
    </div>
  );
};
