"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);

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

  const handleProfileClick = () => {
    setIsProfileClicked(true);
    setTimeout(() => setIsProfileClicked(false), 1000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/H2Broski",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elmer-jovit-m-04385b315/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/DDDiend/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@KyuminChan",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ejthaaboiii",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.24 14.865 3.75 13.714 3.75 12.417s.49-2.448 1.376-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.886.875 1.376 2.026 1.376 3.323s-.49 2.448-1.376 3.323c-.875.807-2.026 1.297-3.323 1.297z" />
        </svg>
      ),
    },
  ];

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
                    } ${
                      item === "Contact"
                        ? isDarkMode
                          ? "text-blue-400"
                          : "text-blue-600"
                        : ""
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute left-0 bottom-0 w-full h-0.5 transition-all duration-300 ${
                        isDarkMode ? "bg-blue-400" : "bg-blue-600"
                      } ${
                        item === "Contact" ? "w-full" : "w-0 group-hover:w-full"
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

      {/* HERO SECTION - Similar to Home Page */}
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
            src="/me.jpg"
            alt="Contact Profile"
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
          Huh?
        </h2>

        <p
          className={`mt-3 text-lg max-w-xl transition-all duration-700 delay-400 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          You're actually interested?
        </p>

        {/* Divider */}
        <div
          className={`h-1 mt-8 transition-all duration-700 delay-500 ease-out ${
            isLoaded ? "w-24 opacity-100" : "w-0 opacity-0"
          } ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}
        ></div>
      </section>

      {/* CONTACT INFORMATION SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div
            className={`transition-all duration-700 delay-600 ease-out ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Get In Touch
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-blue-900 text-blue-200"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:ejmailom@gbox.ncf.edu.ph"
                    className={`hover:underline ${
                      isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    ejmailom@gbox.ncf.edu.ph
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-green-900 text-green-200"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+639942978065"
                    className={`hover:underline ${
                      isDarkMode
                        ? "text-gray-300 hover:text-green-400"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    +63 994 297 8065
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-purple-900 text-purple-200"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Location
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Naga City, Camarines Sur, Philippines
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-lg ${
                    isDarkMode
                      ? "bg-yellow-900 text-yellow-200"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className={`font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Availability
                  </p>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    Depends on my laziness
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div
            className={`transition-all duration-700 delay-700 ease-out ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
              Follow Me
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
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
