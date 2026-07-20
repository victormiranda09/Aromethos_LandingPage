import Link from "next/link";

export default function NotFound(){
    return(
        <main className="relative flex min-h-screen items-center justify-center 
        overflow-hidden bg-[#0B0B0B] px-6">
            {/* Fundo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(198,156,83,0.12)_0%,transparent_70%)]"/>

            <div className="relative z-10 max-w-2xl text-center">
                <p className="mb-4 text-[#C69C53] text-5xl tracking-[6px]">
                    404
                </p>

                <h1 className="text-5xl md:text-7xl text-[#C69C53]"
                    style={{ fontFamily: "var(--font-cinzel)" }}>
                    Aromethos
                </h1>
                <p className="mt-4 text-2xl italic text-[#E7D2AA]"
                    style={{ fontFamily: "var(--font-cormorant)" }}>
                    Esta página perdeu-se entre os aromas do tempo.
                </p>

                <div className="my-8 flex items-center justify-center gap-4">
                    <div className="h-px w-16 sm:w-24 md:w-36 bg-[#C69C53]"/>
                    <span className="text-[#C69C53]">✦</span>
                    <div className="h-px w-16 sm:w-24 md:w-36 bg-[#C69C53]"/>
                </div>
                
                <Link href="/"
                    className="inline-flex
                                items-center
                                rounded-full
                                border
                                border-[#C69C53]
                                px-6
                                py-2
                                text-[#C69C53]
                                font-semibold
                                transition
                                hover:bg-[#C69C53]
                                hover:text-black">
                    Voltar ao início
                </Link>
            </div>
        </main>
    )
}