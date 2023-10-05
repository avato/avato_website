import React from 'react';
import Btn3Col from '../../components/Btn3Col';
import Btn2Col from "../../components/Btn2Col";

const HeroSection = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="hero w-screen h-screen flex max-w-[1290px]">
        <div className="flex-1 flex justify-center items-center relative">
          <div className="w-full flex justify-center items-center">
            <div className="hero-intro relative w-full">
              <div className="absolute left-0 w-5 h-full">
                <div className="v-line-block absolute top-[-100px] left-[-100px] h-[calc(100%+200px)] w-0.5 bg-black">
                  <span></span>
                </div>
              </div>
              <img
                src="avato_logo.svg"
                alt="avato-logo"
                className="w-[80px] mx-auto mt-[-90px] pb-9"
              />
              <h3 className="block font-semibold text-lg pb-5 text-center">
                Hello, <span className="text-primary">my name is</span>
              </h3>
              <h1 className="block pb-6 text-center">
                <span
                  className="singleChar text-white text-7xl font-black relative pl-1 pr-1"
                  data-char="A"
                >
                  A
                </span>
                <span
                  className="singleChar text-tertiary text-7xl font-black relative pl-1 pr-1"
                  data-char="j"
                >
                  J
                </span>
              </h1>
              <h3 className="block text-center font-semibold text-xl">
                I AM a{" "}
                <span className="caveat text-3xl text-primary font-bold">
                  Full Stack Developer
                </span>
              </h3>
              <div className="intro-text pt-16 w-4/5 mx-auto">
                <p className="w-full text-left text-2xl pl-3 font-light">
                  SKILLFULLY CRAFTING
                </p>
                <p className="w-full text-center caveat text-5xl text-primary font-bold py-3">
                  Light{" "}
                  <span className="singleChar text-tertiary pl-1 pr-1">
                    {" "}
                    &amp;{" "}
                  </span>{" "}
                  Bytes
                </p>
                <p className="w-full text-right text-2xl pt-3 font-light">
                  FOR AMBITIOUS BRANDS
                </p>
              </div>
              <div className="flex justify-center pt-[60px]">
                <a
                  href="https://www.linkedin.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="linkedin.svg" alt="linkedin" className="relative w-12 px-2" />
                </a>
                <a
                  href="https://www.upwork.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="upwork.svg" alt="upwork" className="relative w-12 px-2" />
                </a>
                <a
                  href="https://www.github.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <img src="github.svg" alt="github" className="relative w-12 px-2" />
                </a>
              </div>
            </div>
          </div>
          <img
            src="pat-1.png"
            alt="pattern"
            className="absolute bottom-[20%] left-[-260px] w-[220px]"
          />
        </div>
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
                <span className="font-bold text-sm text-primary">
                  Experience
                </span>
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
      </div>
    </div>
  );
};

export default HeroSection;