export const metadata = {
    title: "Política de Privacidade | Aromethos",

}

export default function PrivicyPolicy(){
    return(
        <main className = "min-h-screen bg-[#0B0B0B] px-6 py-15 text-[#E7D2AA]">
            <div className = "mx-auto max-w-4xl">

                <h1 className = "mb-6 text-5xl text-[#C69C53]"
                    style={{fontFamily: "var(--font-cinzel)"}}>
                    Política de Privacidade
                </h1>

                <section className = "space-y-8 leading-8">
                    <div>
                        <h2 className = "mb-2 text-2xl text-[#C69C53]">
                            1. Que informações recolhemos?
                        </h2>

                        <p>
                            Recolhemos apenas o nome e o endereço de e-mail fornecidos
                            voluntariamente através do formulário da lista de espera.
                        </p>
                    </div>
                    <div>
                        <h2 className = "mb-2 text-2xl text-[#C69C53]">
                            2. Para que utilizamos esses dados?
                        </h2>

                        <p>
                            Os dados serão utilizados exclusivamente para informar sobre
                            o lançamento da Aromethos e comunicar novidades relacionadas
                            com a marca.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-2 text-2xl text-[#C69C53]">
                            3. Partilhamos os seus dados?
                        </h2>

                        <p>
                            Não vendemos nem partilhamos os seus dados pessoais com
                            terceiros para fins comerciais.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-2 text-2xl text-[#C69C53]">
                            4. Os seus direitos
                        </h2>

                        <p>
                            Pode solicitar, a qualquer momento, a alteração ou eliminação
                            dos seus dados entrando em contacto connosco.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-2 text-2xl text-[#C69C53]">
                            5. Contacto
                        </h2>

                        <p>
                            Para qualquer questão relacionada com esta política,
                            contacte-nos através do e-mail oficial da Aromethos.
                        </p>
                    </div>
                    <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-xs text-center"> ✦ Última atualização 
                        20 de Julho de 2026 Aromethos ✦</footer>
                </section>
            </div>
        </main>
    )
}