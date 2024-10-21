"use client";
import React from "react";
import {
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaDocker,
  FaPython,
  FaJenkins,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTerraform,
  SiAnsible,
  SiMysql,
  SiKubernetes,
  SiElasticsearch,
  SiNginx,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTriggers,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Innovative DevOps Engineer with 2+ years of experience specializing in cloud automation, SRE, and Agile methodologies. Passionate about optimizing infrastructure and implementing cutting-edge CI/CD pipelines.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ashish Kadian",
    },
    {
      fieldName: "Phone",
      fieldValue: "7988682061",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "ashishkadian239@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Proven track record in optimizing cloud infrastructure, implementing robust CI/CD pipelines, and enhancing system security across various organizations.",
  items: [
    {
      company: "Teradata",
      position: "DevOps Engineer",
      duration: "July 2023 - Present",
    },
    {
      company: "IIT Bombay",
      position: "DevOps Engineer (Intern)",
      duration: "May 2023 - June 2023",
    },
    {
      company: "SachTak",
      position: "DevOps Engineer (Intern)",
      duration: "Jan 2023 - April 2023",
    },
    {
      company: "C-DAC Netpram",
      position: "Developer (Intern)",
      duration: "Jan 2020 - July 2020",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Solid educational background in Computer Science and specialized training in DevOps practices.",
  items: [
    {
      institution: "IIIT Bangalore",
      degree: "Advanced Program in DevOps",
      duration: "2023",
    },
    {
      institution: "IIIT Bangalore",
      degree: "P.G Diploma in Software Development",
      duration: "2022 - 2023",
    },
    {
      institution: "JECRC University",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2018 - 2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Comprehensive skill set in DevOps technologies, cloud platforms, and automation tools.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
    {
      icon: <FaLinux />,
      name: "Linux",
    },
    {
      icon: <SiTerraform />,
      name: "Terraform",
    },
    {
      icon: <FaAws />,
      name: "AWS (EC2, ECS, S3, ECR)",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaTerminal />,
      name: "Bash Scripting",
    },
    {
      icon: <SiAnsible />,
      name: "Ansible",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <SiElasticsearch />,
      name: "ELK Stack",
    },
    {
      icon: <SiNginx />,
      name: "Nginx",
    },
    {
      icon: (
        <>
          <SiPrometheus /> <SiGrafana />
        </>
      ),
      name: "Prometheus and Grafana",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
  ],
};

const Resume = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
          <div className="container mx-auto">
            <Tabs
              defaultValue="experience"
              className="flex flex-col xl:flex-row gap-[60px]"
            >
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>
              {/* content */}
              <div className="min-h-[70vh] w-full">
                {/* experience */}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col gap-8 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="space-y-4">
                        {experience.items.map((item, index) => (
                          <li key={index}>
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* education */}
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col gap-8 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="space-y-4">
                        {education.items.map((item, index) => (
                          <li key={index}>
                            <span className="text-sm text-gray-500">
                              {item.duration}
                            </span>
                            <h3 className="text-lg font-semibold">
                              {item.degree}
                            </h3>
                            <div className="flex items-center">
                              {/* dot */}
                              <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                              <p>{item.institution}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills" className="w-full">
                  <div className="flex flex-col gap-8 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {skills.skillList.map((skill, index) => (
                          <li
                            key={index}
                            className="flex flex-col items-center"
                          >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <p>{skill.name}</p>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* about */}
                <TabsContent value="about" className="w-full">
                  <div className="flex flex-col gap-8 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {about.info.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center md:items-start"
                        >
                          <p className="font-bold">{item.fieldName}</p>
                          <p>{item.fieldValue}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
