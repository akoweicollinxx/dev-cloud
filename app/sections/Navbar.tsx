"use client"

import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"
import { ModeToggle } from "../components/ModeToggle"

const navLinks = [
    { title: "Features", path: "#features" },
    { title: "Services", path: "#services" },
    { title: "Pricing", path: "#pricing" },
    { title: "Contact", path: "#contact" },
]

export const Navbar = () => {

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }
    
    return (
        <div className="z-50 fixed left-[35%]  text-black/80 dark:text-white font-bold">
            <div className="border border-white/20 mt-12 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2
                            max-w-[400px] mx-auto">
                                <ModeToggle />
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} className="transform hover:skew-x-12 hover:text-sky-400 transition-all duration-300 ease-in-out">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
                
            </div>
            


            <div onClick={toggleNav} className="md:hidden absolute top-5 left-10 border cursor-pointer rounded z-50 dark:text-white/70 text-sky-600 border-white/70 p-2">
                {nav ? <AiOutlineClose size={38} /> : <AiOutlineMenu size={38} />}
                <div className="ml-0">
                <ModeToggle />
                </div>
            </div>
            
            
            <motion.div
                initial={false}
                animate={nav ? 'open' : 'closed'}
                variants={menuVariants}
                className="fixed left-0 top-0 w-full h-full bg-black/90"
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.path} onClick={closeNav} className="text-5xl">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            
            
        </div>
        
    )
}