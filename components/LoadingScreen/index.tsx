import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="logo">
        <svg
          className="mySvg"
          width="203"
          height="229"
          viewBox="0 0 203 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.5 216.661C60.1667 205.827 40.5 165.5 61.5 159.5C67.5 157.786 94 168.5 78.5 209C76.5864 214 55.5 231 31.4992 206C15.6658 178 -12.785 120.162 44.499 87C53.9997 81.5 97.5002 67 118.499 106.5C140.781 148.414 93.999 156.5 110.499 201.5C119.166 222.333 168.999 240 188.999 163C196.142 135.5 199.499 60.5001 142.999 20.5C120.666 6.49997 65.5997 0.299835 21.9997 49.4998"
            stroke="black"
            className="track"
            stroke-width="19"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
