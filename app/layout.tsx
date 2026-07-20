import type { Metadata } from "next";
import { cinzel, cormorant, inter } from "@/lib/fonts";
import "./globals.css"

export const metadata: Metadata = {
  title: "Aromethos",
  description: "",
  keywords:[
    "aromas",
    "especiarias",
    "temperos",
   ],
   openGraph: {
    title: "Aromethos",
    description: "Onde o aroma carrega séculos",
    images: ["/images/og-images.jpg"]
   },

   twitter: {
    card: "summary_large_image",
    images: ["/images/og-images.jpg"]
   },

   authors: [{ name: "Victor Miranda"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">

      <body className={`${cinzel.variable}
                      ${cormorant.variable}
                      ${inter.variable}
                      bg-black
                      text-white
                      antialiased`}>
        {children}

      </body>

    </html>
  );
}
