"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Certificates() {

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
                                sequence={['cat Certificates.txt', 1000]}
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
                            <span className="mx-2">Great Learning:</span>
                            <span className="text-blue-500">MySQL Tutorial</span>
                        </div>

                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">Great Learning:</span>
                            <span className="text-blue-500">Introduction to Information Security</span>
                        </div>

                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">Great Learning:</span>
                            <span className="text-blue-500">Python Fundamentals for Beginners</span>
                        </div>

                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">Great Learning:</span>
                            <span className="text-blue-500">Linux Tutorial</span>
                        </div>

                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">Netacad Cisco Certificate:</span>
                            <span className="text-blue-500">CCNAv7: Introduction to Networks</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
