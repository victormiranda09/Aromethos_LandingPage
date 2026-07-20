"use_client";

import { useForm } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod";


import { notifySchema, NotifyFormData } from "@/lib/validation/notifySchema";

interface NotifyFormProps {
    onSuccess: () => void;
}

export default function NotifyForm({onSuccess} : NotifyFormProps){
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<NotifyFormData>({
        resolver: zodResolver(notifySchema),
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverError, setServerError] = useState("");

    const onSubmit = async (data: NotifyFormData) => {
        setServerError("");
        setIsSubmitting(true)

        try{
            const response = await fetch("/api/notify", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok){
                setServerError(result.message);
                return;
            }
            onSuccess();

        } finally {
            setIsSubmitting(false);
        }
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
        >
            <div>
                <input {...register("name")}
                placeholder="Nome"
                className="w-full rounded-lg border border-[#C69C53]/30 bg-transparent px-4 py-3
                text-white outline-none transotion focus:border-[#C69C53]" />
                {errors.name && (
                    <p className="mt-2 text-sm text-red-400">
                        {errors.name.message}
                    </p>
                )}
            </div>
                <input {...register("email")}
                placeholder="Email"
                className="w-full rounded-lg border border-[#C69C53]/30 bg-transparent px-4 py-3
                text-white outline-none transotion focus:border-[#C69C53]" />
                {serverError && (
                    <p className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-center text-sm text-[#E7D2AA]">
                        {serverError}
                    </p>
                )}
            <div>
            <button type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden rounded-full bg-[#C69C53] py-3 uppercase font-semibold 
                    text-black transition-all duration-300 hover:brightness-110 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(198,156,83,0.35)] disabled:opacity-70 disabled:cursor-not-allowed">
                        <span className = "realtive z-10">
                            {isSubmitting ? "A enviar..." : "Quero ser avisado"}
                        </span>
            </button>

            </div>
        </form>
    )
}