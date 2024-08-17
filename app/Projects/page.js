"use client";
import React, { useEffect } from "react";
import { CiShare1 } from "react-icons/ci";
import { FaDownload, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = ({ darkMode }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="projects"
      className={`min-h-screen py-12 px-6 ${
        darkMode ? "bg-white" : ""
      } bg-gray-800 `}>
      <h1
        className={`mb-12 text-4xl font-semibold text-center  ${
          darkMode ? "text-gray-800 " : "text-white"
        }  lg:text-5xl xl:text-6xl`}>
        Projects
      </h1>
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up">
          <img
            src="/assets/projects/quiz.png"
            alt="Project 1"
            className="object-cover w-1/3 h-auto max-w-full p-3 rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">My-Quiz</h2>
            <p className="mb-4 text-sm text-justify text-white">
              My quiz app, powered by Express.js, EJS, MongoDB, and Socket.io,
              hosts online static and live quizzes. With MongoDB for efficient
              data management and Socket.io for real-time interactions during
              live quizzes, the platform provides a seamless experience for
              users engaging in both static and dynamic quiz formats.
            </p>
            <a
              href="https://github.com/ajay2603/My_Quiz"
              target="_blank"
              rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <FaGithub />
                Repo
              </button>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
          data-aos-delay="400">
          <img
            src="/assets/projects/email.png"
            alt="Project 3"
            className="object-cover w-1/3 h-auto max-w-full rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg"
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              Email Link Verification
            </h2>
            <p className="mb-4 text-sm text-justify text-white">
              Email Link Verification ensures the authenticity of user
              registrations by requiring users to confirm their email addresses.
              After registration, users receive a verification email with a
              unique link. Clicking this link verifies their email address and
              completes the registration process, ensuring that only valid and
              confirmed accounts are created. This step helps in maintaining the
              integrity of user accounts and preventing fraud.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/ajay2603/Email_link_verification"
                target="_blank"
                rel="noopener noreferrer">
                <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaGithub />
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
          data-aos-delay="400">
          <img
            src="/assets/projects/safesprout.png"
            alt="Project 3"
            className="object-contain w-1/3 h-auto max-w-full p-3 rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg "
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">
              SafeSprout
            </h2>
            <p className="mb-4 text-sm text-justify text-white">
              SafeSprout is a cross-platform mobile application developed with
              Flutter that focuses on child tracking and safety. It integrates
              with a backend built using Node.js, Express.js, and MongoDB to
              provide real-time updates and secure data management, offering
              parents peace of mind with features like location tracking and
              alerts.
            </p>
            <div className="flex justify-between">
              <a
                href="https://github.com/ajay2603/safe-sprout"
                target="_blank"
                rel="noopener noreferrer">
                <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                  <FaGithub />
                  Repo
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div
          className="flex bg-gray-700 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:shadow-slate-500 "
          data-aos="fade-up"
          data-aos-delay="200">
          <img
            src="/assets/projects/pigeon.png "
            alt="Project 2"
            className="object-contain w-1/3 h-auto max-w-full p-3 rounded-l-lg md:w-1/2 md:rounded-l-none md:rounded-tl-lg "
          />
          <div className="flex flex-col justify-center w-2/3 p-4">
            <h2 className="mb-4 text-xl font-semibold text-white">Pigeon</h2>
            <p className="mb-4 text-sm text-justify text-white">
              Pigeon is a real-time chat app employing React.js for frontend,
              Express.js for backend and MongoDB as database, Socket.io for live
              connections, and Peer.js for hassle-free voice and video calls by
              implementing peer-to-peer connection with webRTC. Offering a
              streamlined user experience, Pigeon is web app for dynamic
              communication.
            </p>
            <a
              href="https://github.com/ajay2603/Pigeon"
              target="_blank"
              rel="noopener noreferrer">
              <button className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-gray-500 rounded-lg hover:bg-blue-400">
                <FaGithub />
                Repo
              </button>
            </a>
          </div>
        </div>

        {/* Add more cards here */}
      </div>
    </div>
  );
};

export default Projects;
