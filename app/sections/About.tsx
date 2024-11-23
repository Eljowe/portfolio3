import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="max-w-[800px] pt-10 text-justify font-extralight sm:pt-0 sm:text-xl">
      <div className="">
        <h1 className="title mb-4 text-2xl font-normal text-theme-main">Foreword</h1>
        <div className="Foreword">
          <p>
            I am a 25-year-old IT professional working in consultancy. Pursuing a masters degree in Human-Computer
            Interaction at Aalto University. My background is in electrical engineering, in which I hold a
            bachelor&apos;s degree from Aalto University. Additionally, I studied Mathematics at University of Helsinki
            but did not finish the degree.
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
        <h3 className="mb-4 mt-6 text-2xl font-normal text-theme-main">About this website</h3>
        <p className="Aboutme">
          I try to update this website from time to time, as I gather new experience through work and personal projects.
          This website serves as a portfolio, CV, and a playground for my front-end experiments.
        </p>
      </div>
    </div>
  );
};

export default About;
