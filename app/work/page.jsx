// "use client";

// import WorkSliderBtns from '@/components/ui/WorkSliderBtns';
// import { motion } from "framer-motion";
// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import Link from "next/link";
// import Image from "next/image";

// const projects = [
//   {
//     num: "01",
//     category: "frontend",
//     discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.unt ut labore et dolore magna aliqua.",
//     stack: [{ name: "Html 5" }, { name: "Html 5" }, { name: "Html 5" }],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "02",
//     category: "frontend",
//     discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.unt ut labore et dolore magna aliqua.",
//     stack: [{ name: "Html 5" }, { name: "Html 5" }, { name: "Html 5" }],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "frontend",
//     discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.unt ut labore et dolore magna aliqua.",
//     stack: [{ name: "Html 5" }, { name: "Html 5" }, { name: "Html 5" }],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "04",
//     category: "frontend",
//     discription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.unt ut labore et dolore magna aliqua.",
//     stack: [{ name: "Html 5" }, { name: "Html 5" }, { name: "Html 5" }],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(projects[0]);

//   const handleSlideChange = (swiper) => {
//     // get current slide index
//     const currentIndex = swiper.activeIndex;
//     // update project state based on current slide index 
//     setProject(projects[currentIndex]);
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn" },
//      }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
//             <div className="flex flex-col gap-[30px] h-[50%]">
//               {/* outline num */}
//               <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
//                 {project.num}
//               </div>
//               {/* project category */}
//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
//                 {project.category} project
//               </h2>
//               {/* project description */}
//               <p className="text-white/60">{project.discription}</p>
//               {/* stack */}
//               <ul className="flex gap-4">
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li key={index} className="text-xl text-accent">
//                       {item.name}
//                       { /* remove the last comma */}
//                       {index !== project.stack.length - 1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>
//               {/* buttons */}
//               <div className="flex flex-col gap-4"> {/* Changed to flex-col and added gap */}
//                 {/* border line */}
//                 <div className="w-full h-[1px] bg-white/20"></div> {/* Modified border style */}
                
//                 {/* button container */}
//                 <div className="flex items-center gap-4">
//                   {/* github project button */}
//                   <Link href={project.github}>
//                     <TooltipProvider delayDuration={100}>
//                       <Tooltip>
//                         <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                           <BsGithub className="text-white text-3xl group-hover:text-accent" />
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>Github repository</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     </TooltipProvider>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-[50%]">
//             <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
//               {projects.map((project, index)=> {
//                 return <SwiperSlide key={index} className="w-full ">
//                   <div className="h-[460px] realative group flex justify-center items-center bg-pink-50/20">
//                     {/* overlay */}
//                     <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                     {/* image */}
//                     <div className="relative w-full h-full">
//                       <Image src={project.image} fill className="object-cover"
//                       alt="" />

//                     </div>
//                   </div>
//                 </SwiperSlide>
//               })}
//               { /* slider buttons */}
//               <WorkSliderBtns 
//               containerStyles="flex gap-2 absolute right-0 
//               bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
//               xl:justify-none"
//               btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px]
//               h-[44px] flex justify-center items-center transition-all"
//               />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Work;




"use client";

import WorkSliderBtns from '@/components/ui/WorkSliderBtns';
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
// import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "CI-CD-Nexus",
    category: "DevOps",
    discription: "Automated CI/CD pipeline for voting app using Jenkins. Features Docker image creation, EKS cluster deployment, and ECS integration for seamless delivery.",
    stack: [
      { name: "Jenkins" }, 
      { name: "Docker" }, 
      { name: "AWS EKS" },
      { name: "AWS ECS" }
    ],
    // image: "/work/ci-cd.png",
    github: "https://github.com/syntax2/CI-CD-Nexus",
  },
  {
    num: "02",
    title: "Terraform Infracraft",
    category: "Infrastructure",
    discription: "Complete AWS infrastructure setup using Terraform. Includes VPC, EC2, RDS, S3, and IAM configurations with modular design for scalability.",
    stack: [
      { name: "Terraform" }, 
      { name: "AWS" }, 
      { name: "IAM" }, 
      { name: "RDS" }
    ],
    // image: "/work/terraform.png",
    github: "https://github.com/syntax2/Terraform_Infracraft",
  },
  {
    num: "03",
    title: "Linux Automation",
    category: "DevOps",
    discription: "Shell script automation for Linux system maintenance. Handles package updates, Apache2 configuration, and automated S3 backups with inventory tracking.",
    stack: [
      { name: "Shell" }, 
      { name: "Linux" }, 
      { name: "AWS S3" }, 
      { name: "Apache2" }
    ],
    // image: "/work/automation.png",
    github: "https://github.com/syntax2/Automation_Project",
  },
  {
    num: "04",
    title: "Street Fighter Game",
    category: "Frontend",
    discription: "Interactive 2D fighting game with character selection, collision detection, and smooth animations. Built with vanilla JavaScript for optimal performance.",
    stack: [
      { name: "JavaScript" }, 
      { name: "HTML5" }, 
      { name: "CSS3" }
    ],
    // image: "/work/street-fighter.png",
    github: "https://github.com/syntax2/Street_Fighter_Game",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay:2.4, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* Project Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              {/* Project Category */}
              <p className="text-accent text-[20px] font-semibold">
                {project.category}
              </p>
              {/* Project Description */}
              <p className="text-white/60">{project.discription}</p>
              {/* Tech Stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Buttons Section */}
              <div className="flex flex-col gap-4">
                {/* Border line */}
                <div className="w-full h-[1px] bg-white/20"></div>
                {/* Github Button */}
                <div className="flex items-center gap-4">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12" 
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-black/5">
                    {/* Image section commented out for now */}
                    {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        fill 
                        className="object-cover"
                        alt={`${project.title} project screenshot`} 
                      />
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
              {/* Slider Navigation */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;