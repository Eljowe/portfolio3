import React from 'react';
// #eff876
const Resume = () => {
  return (
    <div id="resume" className="max-w-[1000px] pb-20 pt-10 text-left font-extralight sm:text-xl">
      <h1 className="mb-6 text-2xl font-normal text-theme-main">Resume</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-10" id="mainresume">
          <h3 className="resumehead border-1 mt-4 w-full border-b border-neutral-400 text-[1.3rem] font-normal text-neutral-400">
            Experience
          </h3>
          <h3 className="mt-2 text-xl italic text-theme-second">Accenture</h3>
          <p className="text-sm font-normal text-neutral-400">April 2024 - present</p>
          <ul className="educationlist list-inside list-disc text-neutral-200">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">IT Consulting</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Generative AI</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Data Migration</li>
          </ul>
          <h3 className="mt-2 text-xl italic text-theme-second">Vaisala Oyj</h3>
          <p className="text-sm font-normal text-neutral-400">May 2022 - Aug. 2022 & May 2023 - Aug. 2023</p>
          <ul className="educationlist list-inside list-disc text-neutral-200">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">
              Test engineer trainee at Vaisala instrument factory
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">
              Designing and constructing a production line
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">
              3D-Design and printing of manufacturing components
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">
              Running calibration tests for instruments
            </li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-neutral-400 text-[1.3rem] font-normal text-neutral-400">
            Education
          </h3>
          <h3 className="mt-2 text-xl italic text-theme-second">Aalto University</h3>
          <p className="text-sm font-normal text-neutral-400">Sep. 2019 - Currently</p>
          <ul className="educationlist list-inside list-disc text-neutral-200">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Master&apos;s student</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Major in human-computer interaction</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Minor in computer science</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">
              Bachelor&apos;s degree in electronics and electrical engineering
            </li>
          </ul>
          <h3 className="mt-6 text-xl italic text-theme-second">University of Helsinki</h3>
          <p className="text-sm font-normal text-neutral-400">Sep. 2021 - Currently</p>
          <ul className="educationlist list-inside list-disc text-neutral-200">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Year&apos;s worth of studies</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">
              Major in mathematics with computer science as the field of study
            </li>
          </ul>
          <h3 className="mt-6 text-xl italic text-theme-second">Helsinki school of natural sciences (high school)</h3>
          <p className="text-sm font-normal text-neutral-400">Sep. 2015 - Jun. 2018</p>
          <ul className="educationlist list-inside list-disc text-neutral-200">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.1rem]">Graduated in 2018</li>
          </ul>
        </div>
        <div className="resumediv" id="secondresume text-[1rem] sm:text-[1.1rem]">
          <h3 className="resumehead border-1 mt-4 w-full border-b border-neutral-400 text-[1.3rem] font-normal text-neutral-400 sm:mt-4">
            Skills and familiar tools
          </h3>
          <ul className="max-w-fit list-inside list-disc text-neutral-200">
            <li className="skill mt-2 text-[1rem] sm:text-[1.1rem]">
              Full stack web software development (Node, React, Vite.js, Next.js etc.)
            </li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">
              Programming languages such as javascript, python, and dart
            </li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">Solidworks CAD</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">Background in electrical engineering</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-neutral-400 text-[1.3rem] font-normal text-neutral-400">
            Languages
          </h3>
          <ul className="mt-2 list-inside list-disc text-neutral-200">
            <li className="skill text-[1rem] sm:text-[1.1rem]">Finnish (native)</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">English (full professional proficiency)</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">Swedish (basics)</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-neutral-400 text-[1.3rem] font-normal text-neutral-400">
            Interests and hobbies
          </h3>
          <ul className="mt-2 list-inside list-disc text-neutral-200">
            <li className="skill text-[1rem] sm:text-[1.1rem]">Programming</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">3D-design and printing</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">Electric guitar</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">Film photography, developing and scanning</li>
            <li className="skill text-[1rem] sm:text-[1.1rem]">Football</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
