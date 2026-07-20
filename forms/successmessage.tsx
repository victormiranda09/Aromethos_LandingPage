import {motion} from "framer-motion"

interface SuccessMessageProps {
    onClose?: () => void;
}

export default function SuccessMessage({onClose} : SuccessMessageProps){
    return(
        <motion.div
                initial={{ opacity: 0, scale:0.92, y:20}}
                animate = {{opacity: 1, scale:1, y:0}}
                transition={{duration: 0.6,
                            ease: "easeOut"}}
                className = "py-6 text-center"
            >
                <motion.div
                    initial={{ rotate: -15, scale:0}}
                    animate = {{rotate: 0, scale:1}}
                    transition={{delay: 0.2,
                                duration: 0.6}}
                    className = "mb-5 text-6xl text-[#C69C53]">
                        ✦
                </motion.div>

                <h3 className = "mb-3 text-3xl text-[#C69C53]"
                    style={{ fontFamily: "var(--font-cinzel)"}}
                    >
                    Obrigado!
                </h3> 
                <p className = "leading-8 text-[#E7D2AA]">
                    Agora estas na lista de espera da Aromethos
                </p>
                <p className = "mt-5 text-sm text-neutral-400">
                    Será um dos primeiros a saber
                    quando abrirmos as nossas portas
                </p>

        </motion.div>
    )
};