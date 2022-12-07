import React from "react";

const Chevron = () => {
  const width = 14;
  const height = (8 / 12) * width;

  return (
    <svg
      viewBox="0 0 8 12"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d="M.3 10.6L4.9 6 .3 1.4 1.7 0l6 6-6 6-1.4-1.4z" />
    </svg>
  );
};

export default Chevron;
