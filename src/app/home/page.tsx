"use client";

import { useState, useEffect } from "react";

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
        <a
          href="https://kamenrider.fandom.com/wiki/Kamen_Rider_Wiki"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110"
        >
          <img src="logo.webp" alt="Kamen Rider Logo" className="h-12 w-auto" />
        </a>

        <div className="flex items-center gap-8">
          <ul className="flex gap-8 text-lg">
            {["Home", "About", "Education", "Hobbies", "Contact"].map(
              (item, index) => (
                <li key={item} style={{ transitionDelay: `${index * 100}ms` }}>
                  <a
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`relative group transition-colors duration-300 ${
                      isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isDarkMode ? "bg-blue-400" : "bg-blue-600"
                      }`}
                    ></span>
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
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
