import Image from "next/image";
import Header from "@/components/layout/header"
import Hero from "@/components/hero/hero"
import Footer from "@/components/layout/footer"

export default function Home() {
  return (
       <main className="relative min-h-screen overflow-hidden ">
        <Header/>
        <Hero/>
        <Footer/>
      </main>
  );
}
