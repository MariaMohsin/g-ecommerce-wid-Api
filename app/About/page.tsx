'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import SecondaryNavbar from '../components/Navbar';
import  Section  from '../components/AboutSection';
import VideoComponent from '../components/Video';
import Team from '../components/Team';
import Companysec from '../components/Company';
import Work from '../components/Work';
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";





export default function Home() {
    useEffect(() =>{
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out",
        })
    }, []);
    const [showQuote, setShowQuote] = useState(false);

    const handleShowQuote = ()=> {
        setShowQuote(true);
    
};

  return (
    <div>
    <SecondaryNavbar/>
    <main className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center'>
            <div className='text-center sm:text-left'>
                <h1 className='text-4xl font-bold text-gray-900 mb-4 lg:text-[58px] lg:leading-[80px] lg:w-[542px] lg:h-[80px] lg:mb-7'>
                    ABOUT US
                </h1>
                <p className='text-lg text-gray-500 mb-8 lg:text-[20px] xs:text-[20px] xs:leading-[30px] xs:text-center xs:ml-10  xs:mt-5 xs:w-[277px] xs:h-[120px] lg:leading-[30px] lg:w-[376px] lg:h-[60px]'>
                    We know how large objects will act, <br />
                     but things on a small scale
                </p>

                {/* Button Section */}
                <button
                onClick={handleShowQuote}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Get Quote Now
                </button>
                {showQuote && (
                   <div className='mt-4'>
                    <p className='text-gray-600'>
                        Please provide your information to get a quote.
                    </p>
                   </div>
                )}
            </div>

            {/* Image Section */}
            <div className='relative'>
                <Image 
                src='/About.png'
                alt='A Woman shoping'
                layout='responsive'
                width={280}
                height={415}
                className='w-full h-auto object-contain'
                />
            </div>
        </div>
   </main>
   <div>
    <Section/>
   </div>
   <div>
    <VideoComponent/>
   </div>
   <div>
    <Team/>
   </div>
   <div>
    <Companysec/>
   </div>
   <div>
    <Work/>
   </div>
    </div>
  );
};
