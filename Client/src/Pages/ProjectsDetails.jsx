import React, { useRef, useState } from 'react'


import { TbArrowBadgeRightFilled, TbArrowBadgeLeftFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { IoArrowRedo } from "react-icons/io5";

import cpyler from '../img/videos/Cpyler.mp4'
import clicks from '../img/videos/clicks.mp4'
import Graph from '../img/videos/Graph.mp4'
import { Link } from 'react-router-dom';

const ProjectsDetails = () => {


  const [currentIndex, SetcurrentIndex] = useState(0);
  const cardref = useRef({});

  const data = [{
    id: 1,
    name: 'cpyler',
    description: 'CPYLER is a online code compiler which can run C,C++ and Python codes ,it is full stack project which is made by using techstack ReactJs for the frontend and Material UI and Nodejs and expressJs for the backend and MongoDb for the database',
    video_url:`${cpyler}`,
    url: 'https://cpyler.onrender.com'
  },
  {
    id: 2,
    name: 'clicks : Where Every Click Tells a Story',
    description: ' Clicks is a dedicated platform for photographers to share their passion for capturing the world through their lenses.Allowing users to upload their  camera-captured images,receive feedback.Whether you are a professional photographer or an amateur with a keen eye, Clicks is your space to shine',
    url: 'https://clicks-8bzz.onrender.com',
    video_url:`${clicks}`,
  },
  {
    id: 3,
    name: 'Graph Generator',
    description: 'Graph Generator is the website which generates graph from the given adjacency list and this project is done using React.js and tailwind css and it is completly mobile responsive with good looking ui',
    url:'',
    video_url:`${Graph}`,
  },
  ]

  const sampledata = [{
    id: 1,
    name: 'cpyler',
    description: 'abcd',
    url: '//'
  },
  {
    id: 2,
    name: 'p2',
    description: 'dff',
    url: '//'
  },
  {
    id: 3,
    name: 'p3',
    description: 'bbbb',
    url: ``
  },
  {
    id: 4,
    name: 'p4',
    description: 'bbbb',
    url: '//'
  }
  ]


  const handleNext = () => {
    if (currentIndex === data.length - 1) SetcurrentIndex(0);
    else SetcurrentIndex((prev) => prev + 1);

    cardref.current[currentIndex + 1];


  }
  const handlePrev = () => {
    if (currentIndex === 0) SetcurrentIndex(data.length - 1);
    else SetcurrentIndex((prev) => prev - 1);
  }
  return (

    <div className='w-full h-screen bg-lines   flex items-center justify-center relative' id='projects'>

      {
        sampledata.map((project, ind) => (
          <div className={`card w-[80%] md:w-[50%] h-[50%] md:h-[70%] p-5 ${ind % 2 === 0 ? 'bg-black rotate-6' : 'bg-gray-800 '} 
          hover:cursor-pointer flex flex-col gap-3 absolute shadow shadow-black`}
            ref={cardref}
            key={ind}
          >
            <div className='w-full h-[60%] bg-gray-500 '>

              <img src={`${data[currentIndex].gif}`} className='w-full h-full object-cover' alt="" />


            </div>

            <div>
              <div className='text-white'>{data[currentIndex].name} </div>
            </div>

          </div>
        ))
      }

      {
        data.map((project, ind) => (
          <div className={`card w-[80%] md:w-[50%] h-[50%] md:h-[70%] p-5 ${currentIndex % 2 === 0 ? 'bg-gray-950 rotate-6' : 'bg-gray-800'} 
          hover:cursor-pointer flex flex-col gap-3 absolute `}
            ref={cardref}
            key={ind}
          >
            <div className='w-full h-[60%] bg-gray-500 p-'>

              {/* <img src={`${data[currentIndex].gif}`} className='w-full h-full object-cover' alt="" /> */}
              <video src={`${data[currentIndex].video_url}`} className='w-full h-full object-cover' autoPlay={true}></video>


            </div>

            <div className='h-[40%]'>
              <div className='text-p  md:text-2xl md:my-2 uppercase'>{data[currentIndex].name} </div>
              <div className='text-lines text-sm overflow-y-auto h-[40%] '>{data[currentIndex].description} </div>
            </div>

             <Link className='text-3xl text-lines bg-transparent rounded-full absolute bottom-3 right-3 flex items-center gap-2 hover:text-p' to={data[currentIndex].url} target='_blank'><span className='text-sm'>Visit site</span><IoArrowRedo className='animate-bounce'/></Link>

          </div>
        ))
      }
      <button className='bg-p p-3 text-bgBlack  md:text-4xl rounded-full border-2 border-bgBlack absolute   left-2 md:left-28  shadow-black shadow-lg group' onClick={handlePrev}>  <TbArrowBadgeLeftFilled className='group-hover:animate-ping'/> </button>
      <button className='bg-p p-3 text-bgBlack  md:text-4xl absolute rounded-full border-2   border-bgBlack right-2 md:right-28 shadow-black shadow-lg group' onClick={handleNext}><TbArrowBadgeRightFilled className='group-hover:animate-ping'/> </button>

    </div>
  )
}

export default ProjectsDetails
