import React from 'react'
import Image from 'next/image'

const Companysec = () => {
  return (
    <div className='container mx-auto px-4 bg-[#FAFAFA] lg:h-[479px]'>
      <h1 className='text-3xl font-bold text-center sm:text-4xl lg:text-5xl lg:mt-14'>
        Big Companies Are Here
      </h1>
      <p className='lg:text-[14px] lg:leading-[20px] text-[#737373] lg:text-center lg:mt-10 lg:ml-[365px] lg:w-[397px] lg:h-[40px]'>
        Problems trying to resolve the confilict between  the two major realms of Classical physics: Newtonian mechanics
      </p>
      

      <div className='flex justify-center items-center mt-6 wrapper'>
        <Image 
        src={"/companies.png"}
        alt='companies'
        width={1054}
        height={175}
        className='w-full max-w-[90%] sm:max-w[105px] h-auto'
        />
      </div>
    </div>
  );
};

export default Companysec