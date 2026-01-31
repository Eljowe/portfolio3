import React from 'react';
// #eff876
const Resume = () => {
  return (
    <div id="resume" className="max-w-[1000px] pb-20 pt-10 text-left font-extralight sm:text-xl">
      <h1 className="mb-6 text-2xl font-normal text-theme-main">Resume</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-10" id="mainresume">
          <h3 className="resumehead border-1 mt-4 w-full border-b border-theme-main text-xl font-normal text-theme-main">
            Experience
          </h3>
          <h3 className="mt-2 text-xl italic text-white">Accenture</h3>
          <p className="text-sm font-normal text-theme-lowlight">April 2024 - present</p>
          <ul className="educationlist list-inside list-disc text-[1rem] text-neutral-300">
            <li className="ml-2 pr-2 text-left">IT Consulting</li>
            <li className="ml-2 pr-2 text-left">Generative AI</li>
            <li className="ml-2 pr-2 text-left">Data Migration</li>
          </ul>
          <h3 className="mt-2 text-xl italic text-white">Vaisala Oyj</h3>
          <p className="text-sm font-normal text-theme-lowlight">May 2022 - Aug. 2022 & May 2023 - Aug. 2023</p>
          <ul className="educationlist list-inside list-disc text-[1rem] text-neutral-300">
            <li className="ml-2 pr-2 text-left">Test engineer trainee at Vaisala instrument factory</li>
            <li className="ml-2 pr-2 text-left">Designing and constructing a production line</li>
            <li className="ml-2 pr-2 text-left">3D-Design and printing of manufacturing components</li>
            <li className="ml-2 pr-2 text-left">Running calibration tests for instruments</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-theme-main text-xl font-normal text-theme-main">
            Education
          </h3>
          <h3 className="mt-2 text-xl italic text-white">Aalto University</h3>
          <p className="text-sm font-normal text-theme-lowlight">Sep. 2019 - Dec. 2025</p>
          <ul className="educationlist list-inside list-disc text-[1rem] text-neutral-300">
            <li className="ml-2 pr-2 text-left">Master&apos;s in Human-Computer Interaction</li>
            <li className="ml-2 pr-2 text-left">Minor in computer science</li>
            <li className="ml-2 pr-2 text-left">Bachelor&apos;s degree in electronics and electrical engineering</li>
          </ul>
          <h3 className="mt-6 text-xl italic text-white">University of Helsinki</h3>
          <p className="text-sm font-normal text-theme-lowlight">Sep. 2021 - Currently</p>
          <ul className="educationlist list-inside list-disc text-[1rem] text-neutral-300">
            <li className="ml-2 pr-2 text-left">Studied for a year</li>
            <li className="ml-2 pr-2 text-left">Unfinished</li>
          </ul>
          <h3 className="mt-6 text-xl italic text-white">Helsinki school of natural sciences (high school)</h3>
          <p className="text-sm font-normal text-theme-lowlight">Sep. 2015 - Jun. 2018</p>
          <ul className="educationlist list-inside list-disc text-[1rem] text-neutral-300">
            <li className="ml-2 pr-2 text-left">Graduated in 2018</li>
          </ul>
        </div>
        <div className="resumediv" id="mainresume text-[1rem]">
          <h3 className="resumehead border-1 mt-4 w-full border-b border-theme-main text-xl font-normal text-theme-main sm:mt-4">
            Skills and Familiar Tools
          </h3>
          <ul className="max-w-fit list-inside list-disc text-[1rem] text-neutral-300">
            <li className="skill mt-2">Full stack web software development (Node, React, Vite.js, Next.js etc.)</li>
            <li className="skill">Mostly experienced with programming in JS, TS, Python, and Dart</li>
            <li className="skill">Solidworks CAD (3D modeling and design, 3D printing)</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-theme-main text-xl font-normal text-theme-main">
            Languages
          </h3>
          <ul className="mt-2 list-inside list-disc text-[1rem] text-neutral-300">
            <li className="skill">Finnish (native)</li>
            <li className="skill">English (full professional proficiency)</li>
            <li className="skill">Swedish (basics)</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-theme-main text-xl font-normal text-theme-main">
            Other Interests and Hobbies
          </h3>
          <ul className="mt-2 list-inside list-disc text-[1rem] text-neutral-300">
            <li className="skill">Electric guitar</li>
            <li className="skill">Film photography, developing and scanning</li>
            <li className="skill">Football</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
