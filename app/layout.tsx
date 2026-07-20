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
    description: "",
    images: ["/images/logo_aromethos.jpg"]
   },

   twitter: {
    card: "summary_large_image",
    images: ["/images/logo_aromethos.jpg"]
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
