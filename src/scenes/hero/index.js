import React, { useState, useEffect } from "react";
import SocialButtons from "../../components/SocialButtons";
import HeroImg from "./HeroImg";


const HeroSection = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
              <h3 className="block font-semibold text-lg pb-2 text-center">
                Hello, <span className="text-primary">my name is</span>
              </h3>
              <h1 className="block pb-3 text-center">
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
              {windowWidth < 768 && <HeroImg />}
              <div className="intro-text pt-16 w-4/5 mx-auto">
                <p className="w-full text-left text-2xl pl-3 font-light">
                  SKILLFULLY CRAFTING
                </p>
                <p className="w-full text-center caveat text-5xl text-primary font-bold py-1">
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
              <SocialButtons />
            </div>
          </div>
          <img
            src="pat-1.png"
            alt="pattern"
            className="absolute bottom-[20%] left-[-260px] w-[220px]"
          />
        </div>
        {windowWidth >= 768 && <HeroImg />}
      </div>
    </div>
  );
};

export default HeroSection;
