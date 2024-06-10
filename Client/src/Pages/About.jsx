import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';


import { FaLinkedinIn } from "react-icons/fa6";
import { PiGithubLogoFill } from "react-icons/pi";

const About = () => {
    const naigate = useNavigate();


    return (
        <div className='w-full  bg-[#191b1c] text-gray-500  p-4 md:p-8 scroll-smooth' id='about'>
            <div className='uppercase text-3xl md:text-6xl tracking-wide mb-5 p-4  border-b border-b-[lines]'>About me</div>

            <div className='flex justify-between md:flex-row'>
                <div className=' w-[80%]   text-xl md:text-5xl md:leading-relaxed border-r border-r-[lines] p-3 md:p-6 font-bold tracking-wide font-cursive'>
                    A <span className='text-p animate-pulse'>code-blooded photographer </span>continuing journey of <span className='text-p animate-pulse'>photography</span> and <span className='text-p animate-pulse'>coding </span>,
                    which started with capturing memories through each <span className='text-p animate-pulse'>single click</span> and the writing of the first <span className='text-p animate-pulse'>Hello World program.</span>
                </div>

                {/* right icons section */}
                <div className='w-[20%]  flex  flex-col  md:flex-row items-center justify-center gap-4 p-2'>
                    <div>


                        <Link to={'https://www.linkedin.com/in/shirish-gund-63374b21b/'} target='_blank' className='bg-p hidden md:block  p-2 md:p-4 text-black font-medium  w-full md:w-[6rem] hover:bg-lines'>Linkedin</Link>
                        <Link to={'https://github.com/ShirishGund14'} target='_blank' className='bg-p  hidden md:block p-2 md:p-4 text-black font-medium w-full md:w-[6rem]  hover:bg-lines'>Github</Link>
                        <Link to={'https://www.geeksforgeeks.org/user/shirish14g/'} target='_blank' className='bg-p hidden md:block  p-2 md:p-4 text-black font-medium  w-full md:w-[6rem] hover:bg-lines'>GFG</Link>
                        <Link to={'https://leetcode.com/u/Shirish_Gund/'} target='_blank' className='bg-p  hidden md:block p-2 md:p-4 text-black font-medium w-full md:w-[6rem]  hover:bg-lines'>Leetcode</Link>

                    </div>
                    <div className=' md:hidden flex flex-col items-center justify-center ml-4 gap-5 md:gap-0'>

                        <Link to={'https://www.linkedin.com/in/shirish-gund-63374b21b/'} target='_blank' className='bg-lines  p-2 rounded-full'> 
                        <FaLinkedinIn className='md:hidden  text-2xl text-black' />
                        </Link>

                        <Link to={'https://github.com/ShirishGund14'} target='_blank' className='bg-lines  p-2 rounded-full'>
                            <PiGithubLogoFill className='md:hidden  text-black text-2xl' />
                        </Link>

                        <Link to={'https://www.geeksforgeeks.org/user/shirish14g/'} target='_blank' className='bg-lines  p-2 rounded-full'>
                            <SiGeeksforgeeks className='md:hidden  text-black text-2xl' />
                        </Link>

                        <Link to={'https://leetcode.com/u/Shirish_Gund/'} target='_blank' className='bg-lines  p-2 rounded-full'>
                            <SiLeetcode className='md:hidden  text-black text-2xl' />
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
