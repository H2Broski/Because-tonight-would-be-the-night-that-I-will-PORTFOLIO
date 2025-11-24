"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth transition
    setTimeout(() => setIsLoaded(true), 50);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleProfileClick = () => {
    setIsProfileClicked(true);
    setTimeout(() => setIsProfileClicked(false), 1000);
  };

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
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
          <Link
            href="/home"
            className="text-lg font-semibold text-blue-500 transition-colors duration-300"
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
            className="text-lg hover:text-blue-500 transition-colors duration-300"
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

      {/* HERO SECTION */}
      <section
        className={`flex flex-col items-center text-center mt-20 px-6 transition-all duration-700 delay-200 ease-out ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Profile Photo */}
        <div
          className="relative group cursor-pointer"
          onClick={handleProfileClick}
        >
          <img
            src="/profile.jpg"
            alt="My Profile"
            className={`w-40 h-40 rounded-full object-cover border-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl ${
              isDarkMode
                ? "border-gray-700 group-hover:border-blue-400"
                : "border-gray-200 group-hover:border-blue-600"
            }`}
            style={{
              animation: isProfileClicked
                ? "typhoonSpin 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                : "none",
            }}
          />
          <div
            className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
              isDarkMode ? "bg-blue-400" : "bg-blue-600"
            }`}
          ></div>

          {/* Typhoon Belt Energy Effect */}
          {isProfileClicked && (
            <>
              {/* Spinning energy rings */}
              <div
                className="absolute inset-0 rounded-full border-4 border-red-500"
                style={{
                  animation: "energyRing1 0.8s ease-out",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-green-500"
                style={{
                  animation: "energyRing2 0.8s ease-out",
                  animationDelay: "0.1s",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-blue-500"
                style={{
                  animation: "energyRing3 0.8s ease-out",
                  animationDelay: "0.2s",
                }}
              ></div>

              {/* Center flash */}
              <div
                className="absolute inset-0 rounded-full bg-white"
                style={{
                  animation: "centerFlash 0.8s ease-out",
                }}
              ></div>
            </>
          )}
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes typhoonSpin {
            0% {
              transform: rotate(0deg) scale(1);
            }
            50% {
              transform: rotate(180deg) scale(1.15);
            }
            100% {
              transform: rotate(360deg) scale(1);
            }
          }
          
          @keyframes energyRing1 {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: scale(2.5) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes energyRing2 {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: scale(2.5) rotate(-360deg);
              opacity: 0;
            }
          }
          
          @keyframes energyRing3 {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: scale(2.5) rotate(360deg);
              opacity: 0;
            }
          }
          
          @keyframes centerFlash {
            0% {
              opacity: 0;
            }
            10% {
              opacity: 0.8;
            }
            100% {
              opacity: 0;
            }
          }
        `,
          }}
        />

        {/* Name + Title */}
        <h2
          className={`mt-6 text-4xl font-bold transition-all duration-700 delay-300 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Hello! I'm Elmer Jovit Mailom
        </h2>

        <p
          className={`mt-3 text-lg max-w-xl transition-all duration-700 delay-400 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          A student and aspiring developer. Passionate about building simple and
          functional web designs, and learning more about technology—one step at
          a time.
        </p>

        {/* Divider */}
        <div
          className={`h-1 mt-8 transition-all duration-700 delay-500 ease-out ${
            isLoaded ? "w-24 opacity-100" : "w-0 opacity-0"
          } ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}
        ></div>
      </section>

      {/* FOOTER */}
      <footer
        className={`mt-40 py-6 text-center border-t transition-all duration-700 delay-600 ease-out ${
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
