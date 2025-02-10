import React, { useEffect } from 'react'
import { IoCallOutline,IoLocationSharp} from "react-icons/io5";
import { BsEnvelopeFill, } from "react-icons/bs";
import { FiArrowDown } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";



const Contactcards = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const cards = [
    {
      icon: (
        <IoCallOutline className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />
      ),
      title1: "georgia.young@example.com",
      title2: "georgia.young@ple.com",
      description: "Get Support",
      button: "Submit Request",
    },
    {
      icon: (
        <IoLocationSharp className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />
      ),
      title1: "123 Main Street, LA",
      title2: "California, USA",
      description: "Find Us",
      button: "View on Map",
    },
    {
      icon: <BsEnvelopeFill className="text-[#23A6F0] text-[48px] w-[72px] h-[72px]" />,
      title1: "info@example.com",
      title2: "support@example.com",
      description: "Email Us",
      button: "Send Email",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center py-10 px-4 wrapper">
      <div className="mb-10">
        <h3 className="text-[#252B42] font-bold text-[14px] mb-4">
          VISIT OUR OFFICE
        </h3>
        <h2 className="text-[#252B42] font-bold text-[40px]">
          We help small businesses <br />
          with big ideas
        </h2>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${
              index === 1
                ? "bg-[#252B42] text-white h-[400px]" // Styling for center card
                : "bg-white text-[#252B42]"
            } shadow-md rounded-lg p-6 max-w-sm text-center`}
          >
            <div className="flex justify-center items-center mb-4">
              {card.icon}
            </div>
            <p className="font-bold text-[16px]">{card.title1}</p>
            <p className="font-bold text-[16px] mb-4">{card.title2}</p>
            <p className="font-bold text-[18px] mb-6">{card.description}</p>
            <button
              className={`${
                index === 1
                  ? "bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
                  : "bg-transparent border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white"
              } font-bold py-4 px-6 rounded-full transition`}
            >
              {card.button}
            </button>
          </div>
        ))}
      </div>
      <div className="mt-16 py-10 text-center">
        {/* Arrow Icon */}
        <div className="flex justify-center items-center">
          <FiArrowDown className="text-[#23A6F0] text-[48px] transform -rotate-45" />
        </div>

       
      </div>
    </div>
  );
};


export default Contactcards