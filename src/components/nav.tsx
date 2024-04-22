"use client";
import { useState, useEffect } from 'react';
import AutoType from "./AutoType";

export default function Nav() {
    return (
        <div className="">
            <ul className="">
                <li>
                    <a href="#about" className="">
                        About.txt
                    </a>
                </li>
                <li>
                    <a href="#skills" className="">
                        Skills.txt
                    </a>
                </li>
                <li>
                    <a href="#" className="" >
                        Education.txt
                    </a>
                </li>
                <li>
                    <a href="#" className="" >
                        Experience.txt
                    </a>
                </li>
                <li>
                    <a href="#" className="">
                        Certificates.txt
                    </a>
                </li>
            </ul>
        </div>
        // <div className="flex flex-col md:flex-row justify-between bg-black h-full w-[100%] space-y-2 md:space-y-0 px-10 pt-5 pb-5 md:pb-5 md:items-center">
        //     <ul className="flex justify-center md:justify-start space-x-2 md:space-x-6 md:mr-auto text-green-400 text-xl font-bold">
        //         <li>
        //             <AutoType />
        //         </li>
        //     </ul>

        //     <ul className="flex justify-center md:justify-end space-x-6 text-green-400 text-xl font-bold">
        //         <li>
        //             <a href="#about" className="">
        //                 About.txt
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#skills" className="">
        //                 Skills.txt
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#" className="" >
        //                 Education.txt
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#" className="" >
        //                 Experience.txt
        //             </a>
        //         </li>
        //         <li>
        //             <a href="#" className="">
        //                 Certificates.txt
        //             </a>
        //         </li>
        //     </ul>
        // </div>
    );
}

