"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Education() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("formal");

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

  const educationData = {
    formal: [
      {
        degree: "Bachelor of Science in Information Technology",
        school: "Naga College Foundation, Inc.",
        period: "2024 - Present",
        status: "Currently Enrolled",
        description:
          "Currently pursuing my degree in Information Technology, focusing on software development, database management, and emerging technologies. Actively participating in coding workshops and tech events.",
        achievements: ["Journalism Awardee", "Leadership Awardee"],
        gpa: "GPA: 1.42",
      },
      {
        degree: "Senior High School - General Academic Strand",
        school: "Concepcion Pequeña National High School",
        period: "2022 - 2024",
        status: "Graduated with Honors",
        description:
          "Completed the General Academic Strand with focus on developing critical thinking, research, and communication skills. Active participant in journalism and leadership activities.",
        achievements: ["With Honors", "Journalism Award", "Leadership Award"],
        gpa: "GPA: 93.0%",
      },
      {
        degree: "Junior High School",
        school: "Concepcion Pequeña National High School",
        period: "2018 - 2022",
        status: "Graduated",
        description:
          "Built foundational knowledge across various subjects while developing interest in technology and writing. Participated in school organizations and extracurricular activities.",
        achievements: [],
        gpa: "GPA: 88.0%",
      },
    ],
    online: [
      {
        platform: "Bicol Youth for Technology Expo",
        course: "BYTE2025 Participation",
        period: "October 2025",
        status: "Participated",
        skills: ["Technology Trends", "Networking", "Industry Insights"],
        projects: ["Tech Expo Participation", "Workshop Attendance"],
        duration: "Event Participation",
      },
      {
        platform: "University Capture the Flag",
        course: "DECODE 2025 - Certificate of Participation",
        period: "August 2025",
        status: "Participated",
        skills: ["Cybersecurity", "Problem-solving", "Team Collaboration"],
        projects: ["CTF Challenges", "Security Puzzles"],
        duration: "Competition",
      },
      {
        platform: "Microsoft",
        course:
          "Microsoft Office Specialist: Word Associate (Microsoft 365 Apps)",
        period: "January 2025",
        status: "Certified",
        skills: [
          "Microsoft Word",
          "Document Formatting",
          "Office Productivity",
        ],
        projects: ["Certification Exam", "Practical Skills Assessment"],
        duration: "Certification",
      },
    ],
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
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
          <Link
            href="/home"
            className="text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg hover:text-blue-500 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/education"
            className="text-lg font-semibold text-blue-500 transition-colors duration-300"
          >
            Education
          </Link>
          <Link
            href="/hobbies"
            className="text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Hobbies
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:text-blue-500 transition-colors duration-300"
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

      {/* EDUCATION CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">Education & Learning</h1>
          <p
            className={`text-xl max-w-2xl mx-auto mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My academic journey and continuous learning path in technology
          </p>
          <div
            className={`h-1 w-24 mx-auto transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}
          ></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div
            className={`flex rounded-lg p-1 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            {[
              { id: "formal", label: "Formal Education" },
              { id: "online", label: "Certifications & Events" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-blue-600 text-white shadow-lg"
                    : isDarkMode
                    ? "text-gray-300 hover:text-white hover:bg-gray-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500">
          {/* Formal Education */}
          {activeTab === "formal" && (
            <div
              className={`space-y-8 transition-all duration-700 delay-400 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {educationData.formal.map((edu, index) => (
                <div
                  key={index}
                  className={`relative pl-8 border-l-2 ${
                    isDarkMode ? "border-blue-400" : "border-blue-600"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-2 w-4 h-4 rounded-full ${
                      isDarkMode ? "bg-blue-400" : "bg-blue-600"
                    }`}
                  ></div>

                  <div
                    className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                      isDarkMode
                        ? "bg-gray-800 hover:bg-gray-750"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {edu.degree}
                        </h3>
                        <p
                          className={`text-xl font-semibold ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {edu.school}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            edu.status.includes("Honors") ||
                            edu.status.includes("Award")
                              ? isDarkMode
                                ? "bg-green-900 text-green-200"
                                : "bg-green-100 text-green-800"
                              : isDarkMode
                              ? "bg-blue-900 text-blue-200"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {edu.status}
                        </span>
                        <p
                          className={`mt-2 font-medium ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {edu.period}
                        </p>
                        {edu.gpa && (
                          <p
                            className={`text-sm ${
                              isDarkMode ? "text-gray-400" : "text-gray-500"
                            }`}
                          >
                            {edu.gpa}
                          </p>
                        )}
                      </div>
                    </div>

                    <p
                      className={`mb-4 leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {edu.description}
                    </p>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h4
                          className={`font-semibold mb-2 ${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          Achievements:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-sm ${
                                isDarkMode
                                  ? "bg-yellow-900 text-yellow-200"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Online Learning & Certifications */}
          {activeTab === "online" && (
            <div
              className={`grid gap-6 transition-all duration-700 delay-400 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {educationData.online.map((course, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-750"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {course.course}
                      </h3>
                      <p
                        className={`text-xl font-semibold ${
                          isDarkMode ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        {course.platform}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.status === "Certified"
                            ? isDarkMode
                              ? "bg-green-900 text-green-200"
                              : "bg-green-100 text-green-800"
                            : isDarkMode
                            ? "bg-purple-900 text-purple-200"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {course.status}
                      </span>
                      <p
                        className={`mt-2 font-medium ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {course.period}
                      </p>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {course.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4
                      className={`font-semibold mb-2 ${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Skills & Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm ${
                            isDarkMode
                              ? "bg-blue-900 text-blue-200"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {course.projects && (
                    <div>
                      <h4
                        className={`font-semibold mb-2 ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        Activities:
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        {course.projects.map((project, idx) => (
                          <li
                            key={idx}
                            className={`${
                              isDarkMode ? "text-gray-300" : "text-gray-600"
                            }`}
                          >
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Learning Philosophy */}
        <div
          className={`mt-16 p-8 rounded-xl text-center transition-all duration-700 delay-600 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        >
          <h2 className="text-3xl font-bold mb-4">My Learning Philosophy</h2>
          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            "I believe that education extends beyond the classroom. Every
            certification, workshop, and hands-on project contributes to my
            growth as a technology professional. I'm committed to continuous
            learning and applying knowledge to real-world challenges."
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`mt-20 py-6 text-center border-t transition-all duration-700 delay-800 ease-out ${
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
