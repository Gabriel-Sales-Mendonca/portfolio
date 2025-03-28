import Image from "next/image";
import Link from "next/link";

import ComputerImage from "./computer.png"
import GithubImage from "../../public/assets/images/icon-github.png"
import LinkedinImage from "../../public/assets/images/icon-linkedin.png"
import WhatsappImage from "../../public/assets/images/icon-whatsapp.png"
import ControlaEstoqueImage from "../../public/assets/images/controlaestoque.jpg"
import ListaDeTarefasImage from "../../public/assets/images/lista-de-tarefas.png"
import CalculadoraImage from "../../public/assets/images/calculadora.jpg"
import EthereumImage from "../../public/assets/images/ethereum.jpg"

export default function Home() {
  return (
    <div>
      <nav className="navigation fixed top-0 w-full h-[70px] flex justify-center items-center text-white z-10">
        <div className="h-[50px] flex items-center bg-zinc-700 rounded-full">
          <Link href={"#home"}>Home</Link>
          <Link href={"#projects"}>Projetos</Link>
          <Link href={"#technologies"}>Tecnologias</Link>
        </div>
      </nav>

      <div id="home" className="px-[8%] h-screen text-2xl flex flex-col justify-center">
        <div className="flex">
          <div className="w-[65%] p-[30px] text-white">
            <h1 className="text-6xl font-bold text-blue-600">Gabriel Sales</h1>
            <h2 className="text-3xl font-bold mb-[10px]">Desenvolvedor Full Stack</h2>

            <div className="flex mb-[30px] space-x-4">
              <Image src={GithubImage} alt="GitHub" width={40} height={40} className="rounded-full" />
              <Image src={LinkedinImage} alt="GitHub" width={40} height={40} />
              <Image src={WhatsappImage} alt="GitHub" width={40} height={40} className="rounded-t-full rounded-r-full" />
            </div>

            <p className="text-xl mt-[10px] mb-[20px] bg-zinc-600 rounded-[10px] p-5">Sou desenvolvedor Full stack com experiência prática em backend com Spring Boot e Express.js, e interfaces modernas com React.js e Next.js.<br />
            Tenho familiaridade com bancos de dados relacionais e NoSQL como MySQL, Oracle e MongoDB.
            </p>

            <button className="flex bg-zinc-600 text-white text-base py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-700">Download CV <svg xmlns="http://www.w3.org/2000/svg" className="ml-[10px]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg></button>
          </div>

          <div className="text-white w-[35%] h-full flex flex-col">
            {/*<Image src={ComputerImage} alt="Minha imagem" width={500} height={500} className="image rounded-full" />*/}
            <div className="bg-blue-700 w-full h-[100px] font-bold flex justify-center items-center rounded-t-[20px]">
              <h2 className="text-2xl">
                Estágio - Desenvolvedor Java
              </h2>
            </div>
            <div className="bg-zinc-100 flex-grow rounded-b-[20px] text-black text-base p-3">
              <p><span className="font-bold">Início:</span> Nov/2024 - <span className="font-bold">Fim:</span> Atual</p>
              <p><span className="font-bold">Empresa:</span> Intercomex LTDA.</p><br />

              <p><span className="font-bold">Responsável por:</span></p>

              <ul className="mt-2 pl-6 list-disc space-y-4 text-base">
                <li>🧑‍💻 Desenvolver e consumir APIs de terceiros e governamentais com <span className="font-bold">Java (Spring Boot)</span>.</li>
                
                <li>🤖 Desenvolver e dar manutenção em Automações com <span className="font-bold">Java</span> e biblioteca <span className="font-bold">Selenium</span>.</li>

                <li>Criar consultas <span className="font-bold">SQL</span> e <span className="font-bold">PL/SQL</span> para buscar dados e criar Procedures no banco de dados <span className="font-bold">Oracle</span>.</li>

                <li>Levantamento de requisitos.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

        <div className="mt-[-70px] z-100">
          <div className="text-white w-full text-center text-xl">Role para baixo</div>

          <div className="flex justify-center items-center text-white">
            <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/></svg>
            </div>
          </div>
        </div>


      <section id="projects" className="bg-white text-white w-full py-[80px] flex flex-col">
        <h2 className="text-4xl font-bold m-auto w-1/2 text-center text-blue-700">Meus Projetos</h2>

        <div className="section-projects text-black w-full px-[8%] flex flex-grow flex-wrap justify-center items-center">
          <div>
            <div className="image-projects">
              <Image src={ControlaEstoqueImage} alt="Projeto Controla Estoque" />
            </div>
            <div className="desc-projects">
              <h3>Controle de Estoque</h3>
              <p>Gerenciador de estoque, que inclui autenticação via <span className="font-bold">JWT</span>, geração de hash para senhas, organização de Produtos por Categorias, além do controle de estoque. Fiz <span className="font-bold">API e Front</span>.</p>
              <span>Node.js | React | MongoDB | Axios</span>
              <div className="flex justify-center">
              <button className="bg-white rounded-xl w-30 cursor-pointer text-black hover:bg-blue-700 hover:text-white mr-2">Deploy</button>
              <button className="bg-white rounded-xl w-30 cursor-pointer text-black hover:bg-blue-700 hover:text-white ml-2">GitHub</button>
            </div>
            </div>
          </div>
          <div>
            <div className="image-projects">
              <Image src={ListaDeTarefasImage} alt="Projeto Lista de Tarefas" />
            </div>
            <div className="desc-projects">
              <h3>Lista de Tarefas</h3>
              <p className="">Gerenciador de Tarefas, que permite ao usuário cadastrar, editar e excluir tarefas.</p>
              <span>React | JavaScript | CSS</span>
              <div className="flex justify-center text-black">
              <button className="bg-white rounded-xl w-30 cursor-pointer hover:bg-blue-700 hover:text-white mr-2">Deploy</button>
              <button className="bg-white rounded-xl w-30 cursor-pointer hover:bg-blue-700 hover:text-white ml-2">GitHub</button>
            </div>
            </div>
          </div>
          <div>
            <div className="image-projects">
              <Image src={CalculadoraImage} alt="Projeto Calculadora" />
            </div>
            <div className="desc-projects">
              <h3>Calculadora</h3>
              <p className="">Calculadora que aceita expressões matemáticas para cálculo.</p>
              <span>JavaScript | HTML | CSS</span>
            </div>
          </div>
          <div>
            <div className="image-projects">
              <Image src={EthereumImage} alt="Projeto Página sobre o Ethereum" />
            </div>
            <div className="desc-projects">
              <h3>Página sobre o Ethereum</h3>
              <p className="">Landing Page, focada em demonstrar minhas habilidades com HTML e CSS puro e com a Responsividade em páginas WEB.</p>
              <span>HTML | CSS</span>
            </div>
          </div>

        </div>
      </section>

      <section id="technologies" className="text-white w-full pt-[100px]">
        <h2 className="text-4xl font-bold m-auto w-1/2 text-center">Tecnologias que domino</h2>
        <div className="section-technologies flex w-full px-[8%] mt-[30px] font-mono">
          <div>
            <h3 className="font-bold text-2xl">🧑‍💻 Backend</h3>
            <div className="show-tec flex flex-wrap">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>JPA</span>
              <span>Hibernate</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>JWT</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-2xl">🖥️ Frontend</h3>
            <div className="show-tec flex flex-wrap">
              <span>Next.js</span>
              <span>React.js</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"/></svg>
              <h3 className="font-bold text-2xl">Banco de dados</h3>
            </div>
            <div className="show-tec flex flex-wrap">
              <span>MySQL</span>
              <span>MongoDB Atlas</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
