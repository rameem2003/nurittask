import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={` max-w-container lg:mx-auto mx-3 px-2 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
