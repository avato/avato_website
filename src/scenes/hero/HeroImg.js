import React from "react";
import Btn2Col from "../../components/Btn2Col";
import Btn3Col from "../../components/Btn3Col";

const HeroImg = () => {
  return (
    <div className="flex-1 flex justify-center items-center relative">
      <img
        src="pat-1.png"
        alt="pattern"
        className="absolute bottom-[60%] right-[-20px] w-[220px]"
      />
      <img
        src="pat-1.png"
        alt="pattern"
        className="absolute bottom-[30%] left-[-60px] w-[170px]"
      />
      <img
        src="pat-1.png"
        alt="pattern"
        className="absolute bottom-[30%] right-[-90px] w-[130px]"
      />
      <div className="w-full bg-primary rounded-full aspect-square relative flex justify-center items-center">
        <img src="aj3.png" alt="AJ" className="w-3/5" />
      </div>
      <Btn3Col
        left="15"
        center="+"
        right={
          <p className="flex flex-col text-left uppercase relative top-[-3px] p-0 m-0">
            <span className="font-bold text-sm">Years of</span>
            <span className="font-bold text-sm text-primary">Experience</span>
          </p>
        }
      />
      <Btn2Col
        left="100%"
        right={
          <p className="flex flex-col text-left uppercase relative top-[-3px] p-0 m-0">
            <span className="font-bold text-sm">Project</span>
            <span className="font-bold text-sm text-tertiary">
              Approval Rating
            </span>
          </p>
        }
      />
    </div>
  );
};
export default HeroImg;
