"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Education() {

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
                                sequence={['cat Education.txt', 1000]}
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
                            <span className="mx-2">SPM:</span>
                            <span className="text-blue-500">SMK Padang Midin &ensp;</span>
                        </div>
                        
                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">Diploma:</span>
                            <span className="text-blue-500">Diploma Of Computer Science</span>
                        </div>
                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">Degree:</span>
                            <span className="text-blue-500">Bachelor of Computer Science (Computer Network Security) with honors</span>
                        </div>
                        <div className="mb-1">
                            <span className="text-green-500">$</span>
                            <span className="mx-2">CGPA:</span>
                            <span className="text-blue-500">3.20 (current)</span>
                            <span className="text-green-500">,</span>
                            <span className="text-blue-500">3.25 (Expected)</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
