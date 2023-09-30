import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero w-screen h-screen flex">
      <div className="flex-1 flex justify-center items-center">
        <div className="w-2/3 flex justify-center items-center">
          <div className="hero-intro relative">
            <div className="absolute left-0 w-5 h-full">
              <div className="v-line-block absolute top-[-100px] left-[-100px] h-[calc(100%+200px)] w-0.5 bg-black">
                <span></span>
              </div>
            </div>
            <h3 className="block font-semibold text-lg pb-5 text-center">
              Hello, <span className="text-primary">my name is</span>
            </h3>
            <h1 className="block pb-6 text-center">
              <span
                className="singleChar text-white text-9xl font-black relative pl-2 pr-2"
                data-char="A"
              >
                A
              </span>
              <span
                className="singleChar text-tertiary text-9xl font-black relative pl-2 pr-2"
                data-char="j"
              >
                J
              </span>
            </h1>
            <h3 className="block text-center font-semibold text-xl">
              I AM a{" "}
              <span className="caveat text-3xl text-primary text-bold">
                Full Stack Developer
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-4/5 bg-primary rounded-full aspect-square relative flex justify-center items-center">
          <img src="aj3.png" alt="A description" className="w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;