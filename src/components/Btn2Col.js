import React from "react";

const Btn2Col = ({ left, right }) => {
  return (
    <div className="absolute shadowed flex border-2 border-black rounded-full bg-white pt-5 pl-8 pr-8 pb-4 top-[65%] right-0">
      <span className="font-black text-2xl text-black pr-4">{left}</span>
      {right}
    </div>
  );
};


export default Btn2Col;
