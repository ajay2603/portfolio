"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="skills"
      className={`flex items-center justify-center min-h-screen ${
        darkMode ? "bg-white" : ""
      } bg-gray-800`}>
      <div className="max-w-6xl p-8">
        <h2
          className={`mb-8 text-3xl font-bold ${
            darkMode ? "text-gray-800 " : "text-white"
          }`}>
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-6 m-auto md:grid-cols-3 lg:grid-cols-4">
          {/* HTML */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up">
            <img
              src="/assets/skills/html.png"
              alt="HTML"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">HTML</h3>
          </div>

          {/* CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="200">
            <img
              src="/assets/skills/css.png"
              alt="CSS"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">CSS</h3>
          </div>

          {/* JavaScript */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="400">
            <img
              src="/assets/skills/javascript.png"
              alt="JavaScript"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">JavaScript</h3>
          </div>

          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/typescript.png"
              alt="TypeScript"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">TypeScript</h3>
          </div>

          {/* React */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/node.png"
              alt="Node"
              className="mb-4 rounded-lg "
            />
            <h3 className="text-xl font-semibold text-center">Node.js</h3>
          </div>

          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/react.png"
              alt="React"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">React.js</h3>
          </div>

          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/express.png"
              alt="Express"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">Express.js</h3>
          </div>

          {/* React */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/yyetqsumqfztsv9im2fz"
              alt="Next js"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">Next js</h3>
          </div>

          {/* Tailwind CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/postgresql.png"
              alt="Postgre Sql"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">Postgre Sql</h3>
          </div>

          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/mongodb.png"
              alt="MongoDB"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">MongoDB</h3>
          </div>

          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="600">
            <img
              src="/assets/skills/reactnative.png"
              alt="React-Native"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">React-Native</h3>
          </div>

          {/* Tailwind CSS */}
          <div
            className="p-4 text-white bg-gray-700 rounded-lg shadow-md hover:bg-blue-400 hover:cursor-pointer hover:transition-all"
            data-aos="fade-up"
            data-aos-delay="800">
            <img
              src="/assets/skills/flutter.png"
              alt="Flutter"
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold text-center">Flutter</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
