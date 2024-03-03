import React from 'react';

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1000px] pb-20 pt-10 text-left font-extralight sm:text-xl">
      <h1 className="mb-6 text-2xl font-normal text-[#eff876]">Resume</h1>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:mr-10" id="mainresume">
          <h3 className="resumehead border-1 mt-4 w-full border-b border-[#eff876] text-[1.3rem] font-normal text-[#eff876]">
            Education
          </h3>
          <h3 className="mt-2 text-xl italic text-[#ffa7a7]">Aalto University</h3>
          <p className="text-sm font-normal text-gray-500">Sep. 2019 - Currently</p>
          <ul className="educationlist list-inside list-disc">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">Master&apos;s student</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">Major in human-computer interaction</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">Minor in computer science</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">
              Bachelor&apos;s degree in electronics and electrical engineering
            </li>
          </ul>
          <h3 className="mt-6 text-xl italic text-[#ffa7a7]">University of Helsinki</h3>
          <p className="text-sm font-normal text-gray-500">Sep. 2021 - Currently</p>
          <ul className="educationlist list-inside list-disc">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">Studies on pause</li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">
              Major in mathematics with computer science as the field of study
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">Minor in astronomy</li>
          </ul>
          <h3 className="mt-6 text-xl italic text-[#ffa7a7]">Helsinki school of natural sciences (high school)</h3>
          <p className="text-sm font-normal text-gray-500">Sep. 2015 - Jun. 2018</p>
          <ul className="educationlist list-inside list-disc">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">Graduated in 2018</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-[#eff876] text-[1.3rem] font-normal text-[#eff876]">
            Experience
          </h3>
          <h3 className="mt-2 text-xl italic text-[#ffa7a7]">Vaisala Oyj</h3>
          <p className="text-sm font-normal text-gray-500">May 2022 - Aug. 2022 & May 2023 - Aug. 2023</p>
          <ul className="educationlist list-inside list-disc">
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">
              Test engineer trainee at Vaisala instrument factory
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">
              Designing and constructing a production line
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">
              3D-Design and printing of manufacturing components
            </li>
            <li className="ml-2 pr-2 text-left text-[1rem] sm:text-[1.2rem]">
              Running calibration tests for instruments
            </li>
          </ul>
        </div>
        <div className="resumediv" id="secondresume text-[1rem] sm:text-[1.2rem]">
          <h3 className="resumehead border-1 mt-4 w-full border-b border-[#eff876] text-[1.3rem] font-normal text-[#eff876] sm:mt-4">
            Skills and familiar tools
          </h3>
          <ul className="max-w-fit list-inside list-disc">
            <li className="skill mt-2 text-[1rem] sm:text-[1.2rem]">
              Full stack web software development (Node, React, Vite.js, Next.js etc.)
            </li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">
              Programming languages such as javascript, python, and dart
            </li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">Solidworks CAD</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">Background in electrical engineering</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-[#eff876] text-[1.3rem] font-normal text-[#eff876]">
            Languages
          </h3>
          <ul className="mt-2 list-inside list-disc">
            <li className="skill text-[1rem] sm:text-[1.2rem]">Finnish (native)</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">English (full professional proficiency)</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">Swedish (basics)</li>
          </ul>
          <h3 className="resumehead border-1 mt-4 w-full border-b border-[#eff876] text-[1.3rem] font-normal text-[#eff876]">
            Interests and hobbies
          </h3>
          <ul className="mt-2 list-inside list-disc">
            <li className="skill text-[1rem] sm:text-[1.2rem]">Programming</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">3D-design and printing</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">Electric guitar</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">Film photography, developing and scanning</li>
            <li className="skill text-[1rem] sm:text-[1.2rem]">Football</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
