"use client";
import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

import { Tilt } from "react-tilt";
import { message } from "antd";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 90, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Home = ({ darkMode }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const email = "tarunsaisrinivas7@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      messageApi.success("Email address copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="home"
      className={`min-h-screen dark:bg-white bg-gray-800 ${
        darkMode ? "bg-white" : ""
      }`}>
      {contextHolder}
      <div className="container flex flex-col items-center justify-between px-8 py-16 mx-auto dark:bg-[#edf2f4] md:flex-row md:py-28">
        {/* Text Content */}
        <div
          className="text-center text-white md:text-left md:w-1/2"
          data-aos="fade-right">
          <h1
            className={`mb-8 text-4xl font-bold ${
              darkMode ? "text-gray-800" : ""
            } md:text-5xl lg:text-6xl`}>
            Hi, I'm <br className="md:hidden" />
            Atchuta Rama Raju
          </h1>
          <div
            className={`mb-8 text-2xl font-bold ${
              darkMode ? "text-red-600" : ""
            } text-blue-400`}>
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer",
                  "Cross-Platform Mobile App Developer",
                ],
                autoStart: true,
                loop: true,
              }}
              className="text-xl md:text-2xl lg:text-3xl"
            />
          </div>
          <p
            className={`mb-8 text-lg leading-relaxed text-justify ${
              darkMode ? "text-gray-800" : ""
            }`}>
            Hi there! I'm Atchuta Rama Raju Jampana, a passionate Full Stack
            Developer specializing in the MERN stack, Next.js, and
            cross-platform mobile app development with React Native and Flutter.
            I create dynamic, responsive websites and mobile apps with clean
            code and optimized performance.
            <br />
            My portfolio includes a college department site using HTML, CSS, and
            JavaScript; a chat app built with the MERN stack; a quiz app with
            EJS, Node.js, and MongoDB; and SafeSprout, a cross-platform app with
            Flutter and MongoDB, along with Pigeon, another MERN stack chat
            application.
          </p>
          {/* Buttons */}
          <div className="flex flex-row space-x-4">
            <Button
              link="https://github.com/ajay2603"
              icon={<FaGithub size={30} />}
              className={`border-none md:border-4 md:border-gray-800 ${
                darkMode ? "bg-[#4a4e69]" : ""
              }`}
            />
            <Button
              link="https://www.linkedin.com/in/jarraju"
              icon={<FaLinkedin size={30} />}
              className={`border-none md:border-4 md:border-gray-800 ${
                darkMode ? "bg-[#4a4e69]" : ""
              }`}
            />
            <Button
              link="https://drive.google.com/file/d/1SzGggTOcHaZzYydkS0Ptb3DukeAXiCrN/view?usp=sharing"
              icon={<FaFileAlt size={30} />}
              className={`border-none md:border-4 md:border-gray-800 ${
                darkMode ? "bg-[#4a4e69]" : ""
              }`}
            />
            <Button
              onClick={handleCopy}
              className={`border-none md:border-4 md:border-gray-800 ${
                darkMode ? "bg-[#4a4e69]" : ""
              }`}
              icon={<IoIosMail size={30} />}
            />
          </div>
        </div>
        {/* Image */}
        <div className="mt-8 md:mt-0 md:w-1/2" data-aos="fade-left">
          <Tilt options={defaultOptions} className="transition-all">
            <img
              src="/assets/Cartoon-Avatar-On-Circle-Background-removebg-preview.png"
              alt=""
              className="w-40 m-auto overflow-x-hidden rounded-full cursor-pointer md:w-64 lg:w-80"
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

// Button component
const Button = ({ link, icon, onClick, className }) => {
  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center px-4 py-2 transition duration-300 bg-gray-700 border-4 border-gray-800 dark:text-gray-800 dark:bg-[#edf2f4] rounded-2xl dark:hover:bg-blue-400 hover:bg-blue-400 hover:text-black ${className}`}>
        <span className="inline-block">{icon}</span>
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-2 transition duration-300 bg-gray-700 border-4 border-gray-800 dark:text-gray-800 dark:bg-[#edf2f4] rounded-2xl dark:hover:bg-blue-400 hover:bg-blue-400 hover:text-black ${className}`}>
      <span className="inline-block">{icon}</span>
    </button>
  );
};

export default Home;
