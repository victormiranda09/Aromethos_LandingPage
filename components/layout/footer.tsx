import Link from "next/link";
export default function Footer() {
  return (
    <footer className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 text-center text-sm text-[#E7D2AA]">
      © 2026 Aromethos. Todos os direitos reservados.
      <p className="text-xs">Project by <Link href = "https://github.com/victormiranda09" target = "_blank" className = "text-[#C69C53] hover:underline">Victor Miranda</Link></p>
    </footer>
  );
}