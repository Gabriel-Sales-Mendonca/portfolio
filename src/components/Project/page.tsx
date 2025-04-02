import Link from "next/link";
import Image from "next/image";

import ControlaEstoqueImage from "../../../public/assets/images/controlaestoque.jpg";
import ListaDeTarefasImage from "../../../public/assets/images/lista-de-tarefas.png";
import CalculadoraImage from "../../../public/assets/images/calculadora.jpg";
import EthereumImage from "../../../public/assets/images/ethereum.jpg";

export default function Project() {
    return (
        <section id="projects" className="bg-zinc-800 dark:bg-white text-white w-full py-[80px] flex flex-col">
            <h2 className="text-4xl font-bold m-auto w-1/2 text-center dark:text-blue-700">Meus Projetos</h2>
    
            <div className="section-projects text-black w-full px-[8%] max-md:px-0 flex flex-grow flex-wrap justify-center items-center">
                <div>
                    <div className="image-projects relative group">
                        <Link href={"https://controlaestoque.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">
                        <Image src={ControlaEstoqueImage} alt="Projeto Controle de Estoque" />
                        </Link>
                    </div>
                    <div className="desc-projects">
                        <h3><span>Full Stack</span> - Controle de Estoque</h3>
        
                        <p>Gerenciador de estoque, que inclui autenticação via <span className="font-bold">JWT</span>, geração de hash para senhas, organização de Produtos por Categorias, além do controle de estoque. Fiz <span className="font-bold">API e Front</span>.</p>
        
                        <span>Node.js | React | MongoDB | Axios</span>
        
                        <div className="flex justify-center">
                            <Link href={"https://controlaestoque.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">Ver Projeto</Link>
                            <Link href={"https://github.com/Gabriel-Sales-Mendonca/api-controla-estoque"} target="_blank"  rel="noopener noreferrer" className="ml-2">Código</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="image-projects">
                        <Link href={"https://tarefas-gabrielsales.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">
                        <Image src={ListaDeTarefasImage} alt="Projeto Lista de Tarefas" />
                        </Link>
                    </div>
                    <div className="desc-projects">
                        <h3><span>Frontend</span> - Lista de Tarefas</h3>
        
                        <p>Gerenciador de Tarefas, que permite ao usuário cadastrar, editar e excluir tarefas.</p>
        
                        <span>React | JavaScript | CSS</span>
        
                        <div className="flex justify-center">
                            <Link href={"https://tarefas-gabrielsales.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">Ver Projeto</Link>
                            <Link href={"https://github.com/Gabriel-Sales-Mendonca/lista-de-tarefas"} target="_blank"  rel="noopener noreferrer" className="ml-2">Código</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="image-projects">
                        <Link href={"https://calculadora-gabrielsales.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">
                        <Image src={CalculadoraImage} alt="Projeto Calculadora" />
                        </Link>
                    </div>
                    <div className="desc-projects">
                        <h3><span>Frontend</span> - Calculadora</h3>
        
                        <p className="">Calculadora que aceita expressões matemáticas para cálculo.</p>
        
                        <span>JavaScript | HTML | CSS</span>
        
                        <div className="flex justify-center">
                            <Link href={"https://calculadora-gabrielsales.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">Ver Projeto</Link>
                            <Link href={"https://github.com/Gabriel-Sales-Mendonca/calculadora"} target="_blank"  rel="noopener noreferrer" className="ml-2">Código</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="image-projects">
                        <Link href={"https://eth-gabrielsales.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">
                        <Image src={EthereumImage} alt="Projeto Página sobre o Ethereum" />
                        </Link>
                    </div>
                    <div className="desc-projects">
                        <h3><span>Frontend</span> - Página sobre o Ethereum</h3>
        
                        <p className="">Landing Page, focada em demonstrar minhas habilidades com HTML e CSS puro e com a Responsividade em páginas WEB.</p>
        
                        <span>HTML | CSS</span>
        
                        <div className="flex justify-center">
                            <Link href={"https://eth-gabrielsales.netlify.app/"} target="_blank" rel="noopener noreferrer" className="mr-2">Ver Projeto</Link>
                            <Link href={"https://github.com/Gabriel-Sales-Mendonca/landing-page-ethereum"} target="_blank"  rel="noopener noreferrer" className="ml-2">Código</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}