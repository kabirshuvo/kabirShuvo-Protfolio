"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          {" "}
          The Word That Describes Me Best Is <br /> 'A GOAL SETTER'.
        </h1>

        <p className="hero_subtitle">
          I'm looking for a great team along with a logical environment to grow
          in.
        </p>

        <div className="flex gap-7">
          <CustomButton
            title="Interview Me"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
          <CustomButton
            title="My Resume"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
          <div className="hero__image-overlay"></div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src="/heroImage.png"
              alt="hero-image"
              fill
              className="object-contain"
            />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
