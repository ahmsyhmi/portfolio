"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import pPic from '../assets/profile.png';
import Image from 'next/image';


export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className="flex flex-col bg-black h-full w-full text-white pl-1 pr-1 pt-1">
            <div className="border-4 p-3">
                <ul>
                    <li>
                        <p className="text-[18px] text-green-400">
                            $ahmsyhmi : &ensp;
                            <TypeAnimation
                                sequence={['cat About.txt', 1000]}
                                wrapper="span"
                                speed={1}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                    </li>
                </ul>
                <ul className="py-5 flex flex-col items-center">
                    <li>
                        <Image src={pPic} alt={'picture'} className="flex border border-white rounded-lg p-3 max-w-md" />
                    </li>
                    <li className="flex flex-col pt-3 text-5xl font-honk items-center">
                        <span>Ahmad Syahmi</span>
                        <p className="pt-3 px-4 md:px-32 text-[20px] font-insco text-justify">
                            Greetings! I&apos;m Ahmad Syahmi bin Mohd Jaafar, a 25-year-old enthusiast from Terengganu. My journey into
                            the realm of technology began with web development, where I honed my skills crafting digital experiences.
                            However, my curiosity and eagerness to explore led me to pivot towards Linux support and system
                            administration.
                        </p>
                        <p className="pt-3 px-4 md:px-32 text-[20px] font-insco text-justify">
                            My passion for Linux and programming is the driving force behind my career shift. Delving into the
                            intricacies of Linux systems fuels my desire to become proficient in system administration. I find joy in
                            unraveling the complexities of operating systems and leveraging programming to optimize their
                            functionality.
                        </p>
                        <p className="pt-3 px-4 md:px-32 text-[20px] font-insco text-justify">
                            Beyond the confines of technology, I am an avid sports enthusiast. Whether it&apos;s playing football or
                            engaging in a thrilling game of futsal, I find solace and excitement on the field. Additionally, I immerse
                            myself in the world of cybersecurity through Capture The Flag (CTF) challenges on platforms like TryHackMe.
                            The thrill of ethical hacking not only sharpens my problem-solving skills but also underscores my
                            commitment to cybersecurity principles.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}