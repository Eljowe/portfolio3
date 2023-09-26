import React from 'react'
import Image from 'next/image'

const About = () => {
    return(
        <div id="about" className='text-justify pt-10 sm:pt-0 max-w-[800px] sm:text-xl font-extralight'>
            <div className=''>
                <h1 className='title text-2xl font-normal mb-4 text-[#eff876]'>Foreword</h1>
                <div className='Foreword'>
                    <p>
                        I am a 23-year-old Masters student currently specializing in Human-Computer Interaction at Aalto University.
                        Alongside my primary field of study, I pursue a minor in Computer Science.
                        My background is in electrical engineering, in which I hold a bachelor&apos;s degree from Aalto University.
                        Additionally, I have studied Mathematics at University of Helsinki and try to continue whenever time permits.
                    </p>
                </div>
            </div>
            <div className='Aboutmediv mb-6 mt-6'>
                <img src='/profile2.jpg' alt="me" className='profilepic w-full sm:w-max rounded-[0.5rem] sm:w-[200px] sm:h-[200px] my-4 sm:float-right sm:m-[3vh_2vh_2vh_4vh]'/>
                <h3 className='text-2xl font-normal mb-4 mt-6 text-[#eff876]'>About this website</h3>
                <p className='Aboutme'>
                    I try to update this website from time to time, as I gather new experience through work and personal projects.
                    This website serves as a portfolio, CV, and a playground for my front-end experiments.
                </p>
            </div>
        </div>
    )
}

export default About