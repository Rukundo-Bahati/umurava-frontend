import Image from "next/image";
import React from "react";
import "./talent_counter";
import { TalentCounter } from "./talent_counter";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section flex items-center justify-between p-8 space-x-32 relative">
      <div className="text-column w-1/2">
        <h1 className="text-4xl font-bold text-[#2B71F0] ml-20">
          Build Work Experience through Skills Challenges Program
        </h1>
        <p className="mt-4 text-lg text-[#2B3338] ml-20">
          Enhance your Employability and Accelerate your Career Growth by
          working on Hands-on project & hackathons from various businesses &
          organizations.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition ml-20">
          Get Started
        </button>
      </div>

      {/* Positioning TalentCounter over the image */}
      <div className="mt-[200px] rounded-full border-white mr-[0px] absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white px-10">
        <TalentCounter />
      </div>

      {/* Image Column */}
      <div className="image-column w-1/2">
        <Image
          src="/images/homepage.png"
          alt="home_page_photo"
          width={570}
          height={443}
        />
      </div>
    </section>
  );
};

export default HeroSection;
