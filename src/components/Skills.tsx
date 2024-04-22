"use client";
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
    
export default function Skills(){

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return ( 
        
        <div className="bg-black  font-insco pr-1 pt-1">
            <div className="border-4 p-3">
                <ul>
                    <li>
                        <p className="text-[18px] text-green-400">
                            $ahmsyhmi : &ensp;
                            <TypeAnimation
                                sequence={['cat Skills.txt', 1000]}
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
                        <span className="mx-2">Language:</span>
                        <span className="text-blue-500">English</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Malay</span>
                    </div>
                    <div className="mb-1">
                        <span className="text-green-500">$</span>
                        <span className="mx-2">Programming Language:</span>
                        <span className="text-blue-500">Python</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">PHP</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">HTML</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">JavaScript</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Node.js</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">React</span>
                    </div>
                    <div className="mb-1">
                        <span className="text-green-500">$</span>
                        <span className="mx-2">Tools :</span>
                        <span className="text-blue-500">WSL</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">VMWare</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Postman</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Burpsuite</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">VS Code</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Git</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">PuTTY</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">TablePlus</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">SSMS</span>
                    </div>
                    <div className="mb-1">
                        <span className="text-green-500">$</span>
                        <span className="mx-2">OS :</span>
                        <span className="text-blue-500">Windows</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Kali Linux</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Ubuntu</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Arch Linux</span>
                    </div>
                    <div className="mb-1">
                        <span className="text-green-500">$</span>
                        <span className="mx-2">Database :</span>
                        <span className="text-blue-500">MySQL</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">MongoDB</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">MariaDB</span>
                    </div>
                    <div className="mb-1">
                        <span className="text-green-500">$</span>
                        <span className="mx-2">Web Development :</span>
                        <span className="text-blue-500">Nginx</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">REST API</span>
                        <span className="text-green-500">,</span>
                        <span className="text-blue-500">Apache</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 