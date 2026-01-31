import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about_" className="max-w-[800px] pt-10 text-justify font-extralight sm:pt-0 sm:text-xl">
      <div className="">
        <h1 className="title mb-4 text-2xl font-normal text-theme-main">In Short</h1>
        <div className="Foreword">
          <p>
            I am a 26-year-old IT professional working in consultancy. I have a master&apos;s degree in Human-Computer
            Interaction from Aalto University. My background is in electrical engineering, in which I hold a
            bachelor&apos;s degree. I tinker with whatever catches my interest, be it software development, 3D modeling,
            or music production.
          </p>
        </div>
      </div>
      <div className="Aboutmediv mb-6 mt-6">
        <div className="relative my-4 h-full w-full sm:float-right sm:m-[3vh_2vh_2vh_4vh] sm:max-h-[300px] sm:w-[250px]">
          <Image
            src="/profile2.jpg"
            alt="portrait picture of me"
            width={800}
            height={600}
            className="rounded-[0.5rem]"
          />
        </div>
        <h3 className="mb-4 mt-6 text-2xl font-normal text-theme-main">About This Website</h3>
        <p className="Aboutme">
          I try to update this page from time to time, as I gather new experience through work and personal projects.
          This website serves as a portfolio, CV, and a playground for experiments.
        </p>
        <p className="Aboutme mt-4 w-full text-right italic">~Joel</p>
      </div>
    </div>
  );
};

export default About;
