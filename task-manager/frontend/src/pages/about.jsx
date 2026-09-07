export default function About() {
  return (
    <main className="flex justify-center px-4 py-10 sm:py-16">
      <div className="w-full max-w-3xl mx-auto mt-10 sm:mt-20 mb-10 sm:mb-20 px-5 sm:px-6 py-8 sm:py-12 border border-[#00fffb] rounded-2xl shadow-lg">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold flex justify-center text-[#ffffff] text-center">
          About This Project
        </h1>

        {/* Description */}
        <p className="mt-4 text-[#cacaca] leading-7 text-center text-sm sm:text-base">
          This project is built to practice full-stack web development using a
          modern JavaScript stack. The goal is to create a responsive and scalable
          web application while learning both frontend and backend development.
        </p>

        {/* Frontend / Backend */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8 sm:mt-10">

          {/* Frontend */}
          <div className="bg-[#022534] rounded-xl p-5 sm:p-6 hover:border-cyan-400 border border-transparent transition  md:text-left">
            <h2 className="text-xl sm:text-2xl text-[#00fffb] font-semibold mb-3">
              Frontend
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-[#ffffff] text-sm sm:text-base text-left">
              <li>React.js</li>
              <li>Vite</li>
              <li>Tailwind CSS</li>
              <li>React Router</li>
              <li>Shadcn UI</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-[#022534] rounded-xl p-5 sm:p-6 hover:border-cyan-400 border border-transparent transition md:text-left">
            <h2 className="text-xl sm:text-2xl text-[#00fffb] font-semibold mb-3">
              Backend
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-[#ffffff] text-sm sm:text-base text-left">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Prisma ORM</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

        </div>

        {/* Current Goal */}
        <div className="mt-8 sm:mt-10 bg-slate-800 text-white rounded-xl p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Current Goal
          </h2>

          <p className="text-sm sm:text-base leading-7">
            Learn React routing, reusable components, API integration, Prisma,
            authentication, and build a complete e-commerce web application.
          </p>
        </div>

      </div>
    </main>
  );
}