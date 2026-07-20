"use_client";
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa"
import NotifyForm from "@/forms/notifyform";
import SuccessMessage from "@/forms/successmessage";



interface NotifyModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function NotifyModal({open, onClose,} : NotifyModalProps){

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (!success) return;

        const timer = setTimeout(() => {
            setSuccess(false);
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
        }, [success, onClose]);

    if (!open) return null;


    return(
        <AnimatePresence>
            {open && (
                <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            exit = {{opacity:0}}
                            onClick = {onClose}
                >
                    <motion.div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-[#C69C53]/30 bg-[#0B0B0B]/95 p-8 shadow-[0_0_40px_rgba(198,156,83,0.12)]"
                                initial = {{scale: .9, opacity: 0}}
                                animate = {{scale: 1, opacity: 1}}
                                exit = {{scale: .9, opacity:0}}
                                transition={{duration: .25}}
                                onClick={(e) => e.stopPropagation()}
                    >
                        <motion.div className = "absolute left-1/2 top-0 h-64 w-64 -trnaslate-x-1/2 rounded-full bg-[#C69C53]/10 blur-3xl pointer-events-none"
                                    animate = {{
                                        scale: [1, 1.08, 1],
                                        opacity: [0.3, 0.45, 0.3],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeOut"
                                    }}/>
                        <AnimatePresence mode = "wait">
                            {success ? (<SuccessMessage key ="success"/>) : (
                                <motion.div
                                        key = "form"
                                        initial = {{opacity: 0}}
                                        animate = {{opacity: 1}}
                                        exit = {{opacity:0}}
                                        >
                                            <button className="absolute right-5 top-5 text-[#C69C53] hover:text-white"
                                                onClick={onClose}>
                                                <FaTimes/>
                                            </button>
                                            <h2 className="mb-2 text-center text-xl text-[#C69C53]"
                                                style={{ fontFamily: "var(--font-cinzel)" }}>
                                                Junte-se à viagem
                                            </h2>
                                            <p className="mb-8 text-center text-[#E7D2AA]">
                                            Receba novidades da Aromethos em primeira mão.  
                                            </p>
                                            <NotifyForm onSuccess={() => setSuccess(true)}/>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}