import React from "react";
import PropTypes from "prop-types";

const Btn3Col = ({ left, center, right }) => {
  return (
    <div className="absolute shadowed flex border-2 border-black rounded-full bg-white pt-5 pl-8 pr-8 pb-4 top-[70%] left-0">
      <span className="font-black text-4xl text-tertiary">{left}</span>
      <span className="font-normal text-3xl pl-2 pr-2">{center}</span>
      {right}
    </div>
  );
};

Btn3Col.propTypes = {
  left: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired,
  right: PropTypes.string.isRequired,
};

export default Btn3Col;
