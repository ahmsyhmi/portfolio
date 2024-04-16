"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import pPic from '../assets/profile.png';
import Image from 'next/image';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiTelegramLine } from "react-icons/ri";

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className={`flex flex-col bg-black h-full w-full text-white p-4 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            <div className="border-4 p-3">
                <ul>
                    <li>
                        <p className="text-[18px]">
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
                        <p className="pt-3 px-4 md:px-32 text-xl font-insco text-justify">
                            Greetings! I&apos;m Ahmad Syahmi bin Mohd Jaafar, a 25-year-old enthusiast from Terengganu. My journey into
                            the realm of technology began with web development, where I honed my skills crafting digital experiences.
                            However, my curiosity and eagerness to explore led me to pivot towards Linux support and system
                            administration.
                        </p>
                        <p className="pt-3 px-4 md:px-32 text-xl font-insco text-justify">
                            My passion for Linux and programming is the driving force behind my career shift. Delving into the
                            intricacies of Linux systems fuels my desire to become proficient in system administration. I find joy in
                            unraveling the complexities of operating systems and leveraging programming to optimize their
                            functionality.
                        </p>
                        <p className="pt-3 px-4 md:px-32 text-xl font-insco text-justify">
                            Beyond the confines of technology, I am an avid sports enthusiast. Whether it&apos;s playing football or
                            engaging in a thrilling game of futsal, I find solace and excitement on the field. Additionally, I immerse
                            myself in the world of cybersecurity through Capture The Flag (CTF) challenges on platforms like HackerOne.
                            The thrill of ethical hacking not only sharpens my problem-solving skills but also underscores my
                            commitment to cybersecurity principles.
                        </p>
                    </li>
                </ul>
            </div>
            <div className={`flex justify-center space-x-80 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                <div className="space-y-3 pt-8 ">
                    <ul className='flex flex-row space-x-2  items-center'>
                        <li>
                        <FaGithubSquare size={30} />
                        </li>
                        <li>
                            Github : <a href="https://github.com/ahmsyhmi">github.com/ahmsyhmi</a>
                        </li>
                    </ul>
                    <ul className='flex flex-row space-x-2 items-center'>
                        <li>
                            <FaLinkedin size={30} />
                        </li>
                        <li>
                            LinkedIn : <a href="https://www.linkedin.com/in/ahmsyhmi/">www.linkedin.com/in/ahmsyhmi</a>
                        </li>
                    </ul>
                    <ul className='flex flex-row space-x-2 items-center'>
                        <li>
                            <FaInstagramSquare size={30} />
                        </li>
                        <li>
                            Instagram :  <a href="https://www.instagram.com/ahmsyhmi/">@ahmsyhmi</a>
                        </li>
                    </ul>
                </div>
                <div className="space-y-3 pt-8 ">
                    <ul className='flex flex-row space-x-2 items-center'>
                        <li>
                            <FaWhatsapp size={30} />
                        </li>
                        <li>
                            Whatsapp : <a href="https://wa.me/60173236569/">+60173236569</a>
                        </li>
                    </ul>
                    <ul className='flex flex-row space-x-2 items-center'>
                        <li>
                            <MdOutlineMail size={30} />
                        </li>
                        <li>
                            Email : ahmsyhmi@gmail.com
                        </li>
                    </ul>
                    <ul className='flex flex-row space-x-2 items-center'>
                        <li>
                            <RiTelegramLine size={30} />
                        </li>
                        <li>
                            Telegram :  <a href="https://telegram.me/ahmsyhmi">@ahmsyhmi</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}