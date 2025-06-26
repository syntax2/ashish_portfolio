"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative w-full h-full">
      {/* This parent div now handles the hover effect for a smooth, unified animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.2, duration: 0.5, ease: "easeIn" },
        }}
        whileHover={{ scale: 1.08 }} // Scales up the entire element on hover
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 15,
        }} // A spring transition for a bouncy, responsive feel
        className="relative w-[300px] h-[300px] xl:w-[498px] xl:h-[498px]"
      >
        {/* The Image itself, centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            width={450}
            height={450}
            alt="Ashish Kadian Photo"
            className="object-contain rounded-full w-[280px] h-[280px] xl:w-[450px] xl:h-[450px]"
          />
        </motion.div>

        {/* The restored and improved SVG circle animation */}
        <motion.svg
          className="absolute w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99" // Matches your site's accent color
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse", // Makes the animation go back and forth
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
