"use client";
import {FaBell} from "react-icons/fa"
import NotifyModal from "@/modal/notifymodal";
import NotifyForm from "@/forms/notifyform";

import { useState } from "react";

export default function Hero(){

    const[open, setOpen] = useState(false);
    const [success, setSuccess] = useState(false);

    return(

        <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16">

            {/* Background */}
            <video
                className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/video/video_fundo.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 -z-10
            bg-[radial-gradient(circle,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.25)_55%,transparent_70%)]"/>

            {/* Conteúdo */}
            <div className="w-full max-w-5xl text-center">

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase text-[#C69C53]"
                    style={{fontFamily: "var(--font-cinzel)"}}>
                    Aromethos
                </h1>
                
                <p className="mt text-lg sm:text-xl md:text-3xl lg:text-4xl italic text-[#E7D2AA] px-4"
                    style={{fontFamily: "var(--font-cormorant)"}}>
                    O Sabor da História
                </p>

                <div className="my-3 flex items-center justify-center gap-4">
                    <div className="h-px w-16 sm:w-24 md:w-36 bg-[#C69C53]"/>
                    <p className="text-[#C69C53]">✦</p>
                    <div className="h-px w-16 sm:w-24 md:w-36 bg-[#C69C53]"/>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-[2px] text-[#C69C53] px-2"
                    style={{fontFamily: "var(--font-cormorant)"}}>
                    Novidades em Breve
                </h2>
                <p className="mt-6 px-4 text-base sm:text-lg md:text-xl text-neutral-300">
                    Estamos preparando uma nova experiência.
                    <br />
                    Fique atento.
                </p>
                <button className="group relative
                            mt-10
                            inline-flex
                            items-center
                            gap-3
                            overflow-hidden
                            rounded-full
                            border
                            border-[#C69C53]
                            bg-[rgb(0,0,0,0.70)]
                            px-6
                            py-3
                            sm:px-8
                            sm:py-4
                            text-sm
                            sm:text-base
                            tracking-[3px]
                            text-[#C69C53]
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:bg-[#C69C53]
                            hover:text-black
                        "
                        onClick={() => setOpen(true)}
                        >
                        <FaBell size={18}/>
                        AVISE-ME
                </button>
            </div>
            <NotifyModal 
                open={open}
                onClose={() => setOpen(false)}
                onSuccess={() => setSuccess(false)}
                />
        </section>
    )
}