import Image from "next/image"
import Link from "next/link"
import {FaInstagram, FaFacebook, FaEnvelope} from "react-icons/fa"

export default function Header(){
    return(
        <header className = "absolute inset-x-0 top-0 z-50 px-8 py-8">
            <div className="mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">

                    <Image src="/images/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            priority
                            className="h-10 w-auto"
                            />
                            <span className="text-2xl tracking-widest uppercase text-[#C69C53]"
                                    style={{fontFamily: "var(--font-cinzel)"}}>
                                    Aromethos
                            </span>
                </Link>

                <div className="flex items-center gap-5 text-[#C69C53]">

                    <a href="https://instagram.com/teu_perfil" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="h-6 w-6 cursor-pointer transition hover:scale-130"/>
                    </a>

                    <a href="https://facebook.com/teu_perfil" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="h-6 w-6 cursor-pointer transition hover:scale-130"/>
                    </a>

                    <a href="mailto:teuemail@email.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="h-6 w-6 cursor-pointer transition hover:scale-130"/>
                    </a>
                    
                </div>
            </div>
        </header>
    )
}