export default function MainExperience() {
    return (
        <div className="text-white border-1 border-black rounded-[20px] w-[35%] h-full flex flex-col">
        <div className="bg-blue-700 text-white w-full h-[100px] font-bold flex justify-center items-center rounded-t-[20px]">
          <h2 className="text-2xl">
            Estágio - Desenvolvedor Java
          </h2>
        </div>
        <div className="bg-gray-200 dark:bg-zinc-100 flex-grow rounded-b-[20px] text-black text-base p-3">
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
    )
}