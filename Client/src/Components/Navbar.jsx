import React from 'react';
import { IoMdClose } from "react-icons/io";

const Navbar = ({ toggleNavBar, keyBoardAudioRef }) => {
  const handleClose = () => {
    if (keyBoardAudioRef.current) {
      keyBoardAudioRef.current.play();
    }
    toggleNavBar(); // Toggles the navbar directly
  };

  const scrollToSection = (sectionId) => {
    if (keyBoardAudioRef.current) {
      keyBoardAudioRef.current.play();
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      toggleNavBar(); // Close the navbar after navigation
    }
  };

  return (
    <div className='h-screen w-full fixed top-0 left-0 right-0 bottom-0 bg-p z-[999999999] p-10 md:p-20 transition-transform duration-300 ease-out animate-slideIn'>
      <div>
        <div className='flex justify-between items-center text-bgBlack tracking-wider border-b-4 border-b-bgBlack'>
          <div className='text-5xl md:text-8xl'>SHIRISH</div>
          <button className='text-5xl' onClick={handleClose} aria-label="Close Navbar">
            <IoMdClose />
          </button>
        </div>
        <div className='text-lines text-[2rem] md:text-7xl tracking-wider flex flex-col gap-5 mt-5'>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white' onClick={() => scrollToSection('home')}>01 Home</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white' onClick={() => scrollToSection('about')}>02 About Me</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white' onClick={() => scrollToSection('projects')}>03 Projects</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white' onClick={() => scrollToSection('photography')}>04 Photography</div>
          <div className='hover:cursor-pointer hover:border-b-4 hover:border-b-white  hover:text-white' onClick={() => scrollToSection('skills')}>05 Skills</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
