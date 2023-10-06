import React from "react";

const SocialButtons = () => {
  return (
    <div className="flex justify-center pt-[60px]">
      <a href="https://www.linkedin.com" rel="noreferrer" target={"_blank"}>
        <img src="linkedin.svg" alt="linkedin" className="relative w-12 px-2" />
      </a>
      <a href="https://www.upwork.com" rel="noreferrer" target={"_blank"}>
        <img src="upwork.svg" alt="upwork" className="relative w-12 px-2" />
      </a>
      <a href="https://www.github.com" rel="noreferrer" target={"_blank"}>
        <img src="github.svg" alt="github" className="relative w-12 px-2" />
      </a>
    </div>
  );
};
export default SocialButtons;
