"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Project() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="bg-black  font-insco pr-1">
            <div className="border-4 p-3">
                <ul>
                    <li>
                        <p className="text-[18px] text-green-400">
                            $ahmsyhmi : &ensp;
                            <TypeAnimation
                                sequence={['cat Project.txt', 1000]}
                                wrapper="span"
                                speed={1}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </p>
                    </li>
                </ul>
                <div className="p-4">
                    <div className="flex flex-wrap">
                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">I have ongoing project on <a href="http://47.128.254.99">http://47.128.254.99</a></span>
                            
                        </div>
                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">This is still ongoing project which is use : </span>
                            <span className="text-blue-500"><br/>EC2 Instance,Ubuntu,Nginx,Node.js,MongoDB</span>
                        </div>
                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">TODO : </span>
                            <span className="text-blue-500"><br />Domain,SSL Lets Encrypt using certbot,Login,Signup</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
