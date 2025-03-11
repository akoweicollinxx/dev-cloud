"use client"
import React from "react"
import Image from "next/image"
import detailing from '@/app/assets/detailing.jpg';
import mobile from '@/app/assets/mobile.jpg';
import steam from '@/app/assets/steam.jpg';
import paint from '@/app/assets/paint.jpg';

import { motion } from "framer-motion"
import { AiOutlineCheck } from "react-icons/ai"

const projects = [
    {
      id: 1,
      title: "Car Detailing",
      imageSrc: detailing,
      bulletPoint1: "Tyre & Wheel Cleaning and Dressing",
      bulletPoint2: "Complete interior cleaned, vacuumed and treated",
      bulletPoint3: "Machine Polishing / Paint Correction (removes swirl marks & scratches)",
    },
    {
      id: 2,
      title: "Mobile Cleaning",
      imageSrc: mobile,
      bulletPoint1: "Clean your vehicle anywhere",
      bulletPoint2: "Improved cleaning speed and quality",
      bulletPoint3: "We can organise a time to suit your busy schedule",
    },
    {
      id: 3,
      title: "Steam Cleaning",
      imageSrc: steam,
      bulletPoint1: "Eco-Friendly, Chemical-Free, Germ-Free",
      bulletPoint2: "High-Temperature Steam (100–150°C)",
      bulletPoint3: "Deep Penetration",
    },
    {
      id: 4,
      title: "Paint Protection",
      imageSrc: paint,
      bulletPoint1: "Protect the Shine. Preserve the Value.",
      bulletPoint2: "Luxury Protection for Your Car’s Paint",
      bulletPoint3: "Gloss & Shine Enhancement",
    },
  ];

export const Portfolio = () => {
  return (
    <section className="py-16 container mx-auto min-h-[300vh]" id="features">
        {projects.map((project, index) => (
            <motion.div
                key={project.id}
                className="border border-white/20 mx-auto flex flex-col md:flex-row 
                          text-white rounded-3xl bg-gradient-to-r 
                          from-[#8f8f93] via-[#84a8a8] to-[#8686a6]  
                          dark:from-[#0d0d0e] dark:via-[#303131] dark:to-[#212122]
                            p-12 justify-between space-x-4 items-start mb-24 w-[300px] md:w-[1100px] sticky top-28"
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: index * 0.2}}
                viewport={{ once: true }}
            >
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold md:text-4xl">{project.title}</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-4">
                            <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                            <p>{project.bulletPoint1}</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                            <p>{project.bulletPoint2}</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                            <p>{project.bulletPoint3}</p>
                        </li>
                    </ul>
                </div>
                
                <Image 
                    src={project.imageSrc}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-3xl"
                />

            </motion.div>
        ))}


    </section>
  )
}