import React from "react";

const Heading = ({ title, className }: any) => {
  return (
    <h1
      className={`bg-gradient-to-r text-4xl md:text-6xl font-bold tracking-widest from-[#6E2FC9] to-[#FFFFFF] bg-clip-text text-transparent ${className}`}
    >
      {title}
    </h1>
  );
};

export { Heading };
