import Link from "next/link";
import ThemeToggle from "@/app/theme-toggle";

export default function Menu() {
    return (
        <nav className="navigation fixed top-0 w-full h-[70px] flex justify-center items-center text-white  transition-all duration-300 z-10">
            <div className="h-[50px] flex items-center bg-zinc-700 rounded-full">
                <Link href={"#about"}>Sobre</Link>
                <Link href={"#projects"}>Projetos</Link>
                <Link href={"#technologies"}>Tecnologias</Link>
                <ThemeToggle />
            </div>
        </nav>
    )
}