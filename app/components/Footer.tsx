'use client'
import React from 'react';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  const [email, setEmail] = useState('');



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email submittes:', email);
  };

  return (
    <footer className='bg-white py-5 md:py-10 font-montserrat lg-w-[1440px] xs:mt-5'>
      <div className='mx-auto px-4 sm:px-6 max-w-[1440px]'>

        {/* Top Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center bg-gray-100 px-4 sm:px-5 py-4 sm:h-[142px] lg:w-[1440px] xs:bg-white lg:bg-gray-100'>
          {/* Logo and Name */}
          <div className='mb-4 sm:mb-0 w-full xs:text-start sm:text-left'>
            <h3 className='text-lg sm:text-xl font-bold leading-8 text-gray-800 tracking-[0.1px]'>
              Bandage
            </h3>
          </div>

          {/* Social Media Icons */}
          <div className='flex gap-4 justify-center sm:justify-start w-full lg:mr-20 xs:justify-start'>
            <Link href='#' className='text-blue-600 text-xl'>
              <FaFacebook />
            </Link>
            <Link href='#' className='text-blue-600 text-xl'>
              <FaInstagram />
            </Link>
            <Link href='#' className='text-blue-600 text-xl'>
              <FaTwitter />
            </Link>
          </div>
        </div>

        {/* Middle Section - Vertically Aligned on Small Screen */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 sm:mb-10 place-items-center sm:place-items-start xs:place-items-start xs:mt-5'>
          {/* Company Info */}
          <div className='text-center sm:text-left w-full xs:text-start'>
            <h4 className='text-base sm:text-lg font-bold mb-4 text-gray-800'>
              Compant Info
            </h4>
            <ul className='list-none p-0 text-gray-600 leading-6 font-semibold space-y-2'>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Carrier
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>


          {/* Legal */}
          <div className='text-center sm:text-left w-full xs:text-start'>
            <h4 className='text-base sm:text-lg font-bold mb-4 text-gray-800'>
              Legal
            </h4>
            <ul className='list-none p-0 text-gray-600 leading-6 font-semibold space-y-2'>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Carrier
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className='text-center sm:text-left w-full xs:text-start'>
            <h4 className='text-base sm:text-lg font-bold mb-4 text-gray-800'>
              Features
            </h4>
            <ul className='list-none p-0 text-gray-600 leading-6 font-semibold space-y-2'>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  User Analytics
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Live Chat
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className='text-center sm:text-left w-full xs:text-start'>
            <h4 className='text-base sm:text-lg font-bold mb-4 text-gray-800'>
              Resources
            </h4>
            <ul className='list-none p-0 text-gray-600 leading-6 font-semibold space-y-2'>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  iOS & Android
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  Customers
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-blue-600'>
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>


        {/* Get in Touch */}
        <div className='mb-8 sm:mb-10 text-center sm:text-left xs:text-start'>
          <h4 className='text-base sm:text-lg font-bold mb-4 text-gray-800'>
            Get in Touch
          </h4>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col sm:flex-row items-center justify-center sm:justify-start'>
            <input
              type="email"
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='px-4 py-3 w-full sm:w-52  border border-gray-200 rounded-sm font-semibold mb-4 sm:mb-0 sm:mr-4 text-center sm:text-left' />
            <button type="submit" className='bg-blue-600 text-white px-6 py-3 border-none rounded-md cursor-pointer w-full sm:w-32 font-semibold'>
              Subscribe
            </button>
          </form>
          <p className='text-sm text-gray-600 mt-2 font-semibold'>
            Lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Bottom Section */}
        <div className='bg-gray-200 py-4 sm:h-[74px] xs:bg-white lg:bg-gray-100 xs:w-[414px] xs:h-[98px] lg:w-full'>
          <div className='max-w-[1440px] mx-auto text-center sm:text-left'>
            <div className='text-gray-600 text-sm font-semibold'>
              Made With Love By Finland All Right Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer