export default function Technology() {
    return (
        <section id="technologies" className="text-zinc-800 text-black dark:text-white w-full min-h-screen pt-[100px] flex flex-col">
        <h2 className="text-4xl font-bold m-auto w-1/2 text-center">Tecnologias que domino</h2>
        <div className="section-technologies flex flex-grow w-full px-[8%] mt-[30px] font-mono">
          <div>
            <h3 className="font-bold text-2xl">🧑‍💻 Backend</h3>
            <div className="show-tec flex flex-wrap justify-center">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>JPA</span>
              <span>Hibernate</span>
              <span>JDBC</span>
              <span>JWT</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>mongoose</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-2xl">🖥️ Frontend</h3>
            <div className="show-tec flex flex-wrap justify-center">
              <span>Next.js</span>
              <span>React.js</span>
              <span>Axios</span>
              <span>hooks</span>
              <span>Redux</span>
              <span>Tailwind</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-488q86 0 176.5-26.5T773-694q-27-32-117.5-59T480-780q-88 0-177 26t-117 60q28 35 116 60.5T480-608Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29v-155q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180-618v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35v-125q-28 16-63 28.5T643.5-352q-38.5 9-80 13.5T479-334q-43 0-85-4.5T313.5-352q-38.5-9-72.5-21.5T180-402v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"/></svg>
              <h3 className="font-bold text-2xl">Banco de dados</h3>
            </div>
            <div className="show-tec flex flex-wrap justify-center">
              <span>MySQL</span>
              <span>MongoDB Atlas</span>
              <span>Oracle</span>
            </div>
          </div>
        </div>
      </section>
    )
}