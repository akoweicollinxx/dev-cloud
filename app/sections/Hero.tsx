"use client"
import Image from "next/image"
import car from "../assets/car.png"
import { TypeAnimation } from "react-type-animation"
import React, { useRef } from "react"
import { Button } from "@/components/ui/button"

export const Hero = () => {
    const parallaxRef = useRef(null)

    return (
        <div className="overflow-x-clip relative min-h-screen pt-1 flex items-center justify-center 
    bg-[linear-gradient(180deg,#8BAAC4,#edf2f2,#edf2f2,#edf2f2,#0F62AB)] 
    dark:bg-[linear-gradient(180deg,#0a0a0a,#8BAAC4,#5D97C9,#0F62AB,#0a0a0a)]">
            <div className="container mx-auto flex items-center justify-center flex-col text-center" ref={parallaxRef}>
                <Image 
                    src={car}
                    alt="pcar"
                    className="mx-auto"
                    width={550}
                    
                />
                <h1 className="text-black/80 dark:text-blue-200 font-extrabold -mt-[80px] text-7xl">Experience premium</h1>
                <TypeAnimation 
                    sequence={[
                        "car washing", 1000,
                        "detailing", 1000,
                        "protection", 1000,
                    ]}
                    className="text-7xl text-black/80 dark:text-white inline-block font-extrabold"
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                />
                <p className="text-black/80 dark:text-blue-200 mt-6 text-2xl font-semibold max-w-[500px]">fast, affordable, and done with care. Book your wash today and drive away spotless.</p>
                {/* <Clouds parallaxRef={parallaxRef}/> */}
                <Button variant="outline" className="mt-6 border-2 font-bold h-15 text-1xl"><a href="#contact">Schedule an Appointment</a></Button>

            </div>
        </div>
            
    )
}
