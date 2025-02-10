
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Alice', profession: 'Designer', image: '/username1.png' },
    { id: 2, name: 'Bob', profession: 'Developer', image: '/username2.png' },
    { id: 3, name: 'Charlie', profession: 'Marketer', image: '/username3.png' },
  ];

  return (
    <div className='py-12 px-4 sm:px-6 lg:px-8'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Meet Our Team
        </h2>
        <p className='mt-4 text-gray-600 max-w-2xl mx-auto'>
          Problems trying to resolve the conflict between the major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>
      <div className='mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        {teamMembers.map((member) => (
          <div key={member.id} className='flex flex-col items-center text-center p-6'>
            <Image
              src={member.image}
              alt={member.name}
              width={316}
              height={231}
              className='lg:w-[316px] lg:h-[231px] object-cover mb-4'
            />
            <h3 className='text-lg font-semibold'>{member.name}</h3>
            <p className='text-gray-500 lg:mt-5 lg:mb-3'>{member.profession}</p>
            <div className='flex justify-center space-x-4 mt-4'>
              <Link href='#' className='text-blue-500 lg:w-[24px] lg:h-[24px]'>
                <FaFacebook />
              </Link>
              <Link href='#' className='text-blue-500 lg:w-[24px] lg:h-[24px]'>
                <FaInstagram />
              </Link>
              <Link href='#' className='text-blue-400 lg:w-[24px] lg:h-[24px]'>
                <FaTwitter />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
