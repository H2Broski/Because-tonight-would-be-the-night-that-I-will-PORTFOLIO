"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 50);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <main
      className={`min-h-screen transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* NAVBAR */}
      <nav
        className={`w-full flex justify-between items-center px-10 py-6 border-b transition-all duration-700 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        } ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        {/* Logo - Links to Kamen Rider Wiki */}
        <a
          href="https://kamenrider.fandom.com/wiki/Kamen_Rider_Wiki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:scale-110 transition-transform duration-300 flex-shrink-0"
        >
          <img
            src="/logo.webp"
            alt="Shin Kamen Rider Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Navigation Links - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <Link
            href="/home"
            className="text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg px-4 py-2 rounded-full bg-blue-500 text-white transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/education"
            className="text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Education
          </Link>
          <Link
            href="/hobbies"
            className="text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Hobbies
          </Link>
          <Link
            href="/contact"
            className="text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg transition-all duration-300 flex-shrink-0 ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </nav>

      {/* ABOUT CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title - Centered */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <div
            className={`h-1 w-24 mx-auto ${
              isDarkMode ? "bg-blue-400" : "bg-blue-600"
            }`}
          ></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Focus */}
          <div className="space-y-8">
            {/* Who I Am */}
            <div
              className={`transition-all duration-700 delay-400 ease-out ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Hello! I'm Elmer Jovit Mailom, my close friends and family call
                me EJ. I am a passionate 2nd Year Information Technology student
                at Naga College Foundation, constantly exploring the
                intersection of technology and creativity.
              </p>
            </div>

            {/* Current Focus / Goals */}
            <div
              className={`transition-all duration-700 delay-600 ease-out ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Current Focus & Goals</h2>
              <ul
                className={`space-y-3 text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  Learning hardware and software repair
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  Mastering cybersecurity fundamentals
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  Maximizing AI utilization in development
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  Learning to play musical instruments
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></span>
                  Discovering new skills and technologies
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div
              className={`transition-all duration-700 delay-800 ease-out ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <ul
                className={`space-y-3 text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  StudyMate App (tasks + Pomodoro timer + database)
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  Portfolio website
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  Tokusatsu Store Website
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  bahAI Smart Home Assistant prototype
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  School Faculty Reporting System prototype
                </li>
                <li className="flex items-center">
                  <span
                    className={`w-2 h-2 rounded-full mr-3 ${
                      isDarkMode ? "bg-green-400" : "bg-green-600"
                    }`}
                  ></span>
                  School article writing & media coverage
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills & Tools */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div
              className={`transition-all duration-700 delay-500 ease-out ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Python",
                  "C/C++",
                  "SQL",
                  "Lua",
                  "TypeScript",
                  "HTML/CSS/JavaScript",
                  "React",
                  "TailwindCSS",
                  "Nest.js",
                  "Node.js",
                  "UI/UX Design",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-blue-900 text-blue-200 hover:bg-blue-800"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    }`}
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div
              className={`transition-all duration-700 delay-600 ease-out ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Soft Skills</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Problem-solving",
                  "Adaptability",
                  "Communication",
                  "Writing (journalism background)",
                  "Creativity (cinematography + design)",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isDarkMode
                        ? "bg-green-900 text-green-200 hover:bg-green-800"
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools and Gear */}
            <div
              className={`transition-all duration-700 delay-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4">Tools & Gear</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3
                    className={`font-semibold mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Development Tools
                  </h3>
                  <ul
                    className={`space-y-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <li>• VS Code</li>
                    <li>• GitHub</li>
                    <li>• Figma</li>
                    <li>• ChatGPT</li>
                    <li>• Claude</li>
                    <li>• DeepSeek</li>
                  </ul>
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Creative & Hardware
                  </h3>
                  <ul
                    className={`space-y-1 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <li>• Acer Aspire 15</li>
                    <li>• Lenovo Tab M11</li>
                    <li>• CapCut</li>
                    <li>• DaVinci Resolve</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-900 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p
            className={`text-xl mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Want to see more of my work?
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/education"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              View My Education
            </a>
            <a
              href="/contact"
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border-2 ${
                isDarkMode
                  ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`mt-20 py-6 text-center border-t transition-all duration-700 delay-1000 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${
          isDarkMode
            ? "text-gray-400 border-gray-700"
            : "text-gray-500 border-gray-200"
        }`}
      >
        © {new Date().getFullYear()} Elmer Jovit Mailom — All Rights Reserved
      </footer>
    </main>
  );
}
