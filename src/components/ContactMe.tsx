"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiTelegramLine } from "react-icons/ri";

export default function ContactMe() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="bg-black  font-insco pr-1 pt-1">
            <div className="border-4 p-3 ">
                <ul>
                    <li>
                        <p className="text-[18px] text-green-400">
                            $ahmsyhmi : &ensp;
                            <TypeAnimation
                                sequence={['cat ContactMe.txt', 1000]}
                                wrapper="span"
                                speed={1}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                    </li>
                </ul>
                <div className="flex justify-center space-x-80 py-[42px]">
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
        </div>
    );
}
