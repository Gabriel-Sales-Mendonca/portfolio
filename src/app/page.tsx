import Link from "next/link";

import Technology from "@/components/Technology/page";
import Project from "@/components/Project/page";
import About from "@/components/About/page";
import MainExperience from "@/components/MainExperience/page";
import Menu from "@/components/Menu/page";

export default function Home() {
  return (
    <div>
      <Menu />

      <div id="about" className="px-[8%] h-screen text-2xl flex flex-col justify-center">
        <div className="flex">
          <About />
          <MainExperience />
        </div>
      </div>

        <div className="mt-[-70px] z-100">
          <div className="text-white w-full text-center text-xl flex justify-center">
            <Link href={"#projects"} className="bg-zinc-600 hover:bg-gray-700 px-4 py-1 rounded-xl">
              Ver Projetos
            </Link>
          </div>

          <div className="flex justify-center items-center text-white">
            <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/></svg>
            </div>
          </div>
        </div>
      <Project />
      <Technology />
    </div>
  );
}
