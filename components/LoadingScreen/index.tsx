import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="logo">
        <svg
          className="mySvg"
          width="244"
          height="241"
          viewBox="0 0 244 241"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.9129 190.01C60.9248 151.158 99.9671 179.146 80.6157 210.719C61.2643 242.293 10 238.898 10 196.121C10 153.344 136.633 -11.3127 155.984 71.8645C170.993 136.376 137.223 104.662 121.433 98.2321C120.489 97.8477 119.466 97.5355 118.471 97.7574C104.325 100.913 100.849 178.182 128.663 210.719C164.65 252.817 245.272 217.509 233.39 155.721C221.508 93.9319 155.984 -75.7263 18.4875 63.377"
            stroke="black"
            className="track"
            strokeWidth="18.2558"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingScreen;
