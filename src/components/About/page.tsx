import Link from "next/link";
import Image from "next/image";

import GithubImage from "../../../public/assets/images/icon-github.png";
import LinkedinImage from "../../../public/assets/images/icon-linkedin.png";
import WhatsappImage from "../../../public/assets/images/icon-whatsapp.png";

export default function About() {
    return (
        <div className="w-[65%] p-[30px] text-black dark:text-white">
        <h1 className="text-6xl font-bold text-blue-600">Gabriel Sales</h1>
        <h2 className="text-3xl font-bold mb-[10px]">Desenvolvedor Full Stack</h2>

        <div className="flex mb-[30px] space-x-4">
          <Link href={"https://github.com/Gabriel-Sales-Mendonca"} target="_blank">
            <Image src={GithubImage} alt="GitHub" width={40} height={40} className="rounded-full" />
          </Link>
          <Link href={"https://www.linkedin.com/in/gabriel-sales-mendon%C3%A7a/"} target="_blank">
            <Image src={LinkedinImage} alt="Linkedin" width={40} height={40} />
          </Link>
          <Link href={"https://api.whatsapp.com/send?phone=31986829606&text=sua%20mensagem"} target="_blank">
            <Image src={WhatsappImage} alt="Whatsapp" width={40} height={40} className="rounded-t-full rounded-r-full" />
          </Link>
        </div>

        <p className="text-xl text-white mt-[10px] mb-[20px] bg-zinc-600 rounded-[10px] p-5">Sou desenvolvedor Full stack com experiência prática em backend com Spring Boot e Express.js, e interfaces modernas com React.js e Next.js.<br />
        Tenho familiaridade com bancos de dados relacionais e NoSQL como MySQL, Oracle e MongoDB.
        </p>

        <a href="/assets/pdfs/curriculo-gabriel-sales.pdf" download="curriculo-gabriel-sales.pdf" className="w-50 flex justify-center items-center bg-zinc-600 text-white text-base py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700">Download CV <svg xmlns="http://www.w3.org/2000/svg" className="ml-[10px]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></a>
      </div>
    )
}