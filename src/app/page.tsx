"use client";
import { useState, useEffect } from 'react';
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import ContactMe from '@/components/ContactMe';
import Certificates from '@/components/Certificates';
import Project from '@/components/Project';
import Nav from "@/components/nav";


export default function Home() {
  
  return (
    <div className="flex flex-row justify-between items-start bg-black w-[100%]">
      <div>
        <About />
        <ContactMe />
      </div>
      <div className="space-y-1">
        <div>
          <Skills />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <Certificates />
        </div>
        <div>
          <Project />
        </div>
      </div>
    </div>
  );
}
