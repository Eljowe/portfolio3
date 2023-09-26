import React from 'react'
import Image from 'next/image'

const Resume = () => {
    return(
        <div id="resume" className='max-w-[1000px] text-left pt-10 sm:text-xl font-normal'>
            <h1 className='text-2xl font-bold mb-6'>Resume</h1>
            <div className='flex flex-col sm:flex-row'>
                <div className='sm:mr-10' id="mainresume">
                    <h3 className='text-[1.3rem] text-[#1d1d1d] font-bold border-b-2 w-max border-black mt-4'>Education</h3>
                    <p className="text-sm mt-4 font-bold text-gray-500">Sep. 2019 - Currently</p>
                    <h3 className="text-xl text-[#9a2db6]">Aalto University</h3>
                    <ul className="educationlist list-disc list-inside">
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Master&apos;s student</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Major in human-computer interaction</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Minor in computer science</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Bachelor&apos;s degree in electronics and electrical engineering</li>
                    </ul>
                    <p className="text-sm mt-6 font-bold text-gray-500">Sep. 2021 - Currently</p>
                    <h3 className="text-xl text-[#9a2db6]">University of Helsinki</h3>
                    <ul className="educationlist list-disc list-inside">
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Second-year student</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Major in mathematics with computer science as the field of study</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Minor in astronomy</li>
                    </ul>
                    <p className="text-sm mt-6 font-bold text-gray-500">Sep. 2015 - Jun. 2018</p>
                    <h3 className="text-xl text-[#9a2db6]">Helsinki school of natural sciences (high school)</h3>
                    <ul className="educationlist list-disc list-inside">
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Graduated in 2018</li>
                    </ul>
                    <h3 className="resumehead">Experience</h3>
                    <p className="text-sm mt-6 font-bold text-gray-500">May 2022 - Aug. 2022 & May 2023 - Aug. 2023</p>
                    <h3 className="text-xl text-[#9a2db6]">Vaisala Oyj</h3>
                    <ul className="educationlist list-disc list-inside">
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Test engineer trainee at Vaisala instrument factory</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Designing and constructing a production line</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">3D-Design and printing of manufacturing components</li>
                        <li className="pr-2 ml-2 text-left text-[1rem] sm:text-[1.2rem]">Running calibration tests for instruments</li>
                    </ul>
                </div>
                <div className='resumediv' id="secondresume text-[1rem] sm:text-[1.2rem]">
                    <h3 className='text-[1.3rem] text-[#1d1d1d] font-bold border-b-2 w-max border-black mt-10 sm:mt-4 mb-1'>Skills and familiar tools</h3>
                    <ul className="list-disc list-inside max-w-fit">
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Web software development (Node, React, ThreeJS, Vite.js, Next.js etc.)</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Python</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Solidworks CAD</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">VS Code and git</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Background in electrical engineering</li>
                    </ul>
                    <h3 className='text-[1.3rem] text-[#1d1d1d] font-bold border-b-2 w-max border-black mt-4 mb-1'>Languages</h3>
                    <ul className="list-disc list-inside">
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Finnish (native)</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">English (full professional proficiency)</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Swedish (basics)</li>
                    </ul>
                    <h3 className='text-[1.3rem] text-[#1d1d1d] font-bold border-b-2 w-max border-black mt-4 mb-1'>Interests and hobbies</h3>
                    <ul className="list-disc list-inside">
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Random programming projects</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">3D-design and printing</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Electric guitar</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Film photography, developing and scanning</li>
                        <li className="skill text-[1rem] sm:text-[1.2rem]">Football</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume