"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hobbies() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState("shows");
  const [currentShowIndex, setCurrentShowIndex] = useState(0);
  const [currentRiderIndex, setCurrentRiderIndex] = useState(0);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

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

  const hobbiesData = {
    tech: {
      title: "Tech and Coding",
      icon: "💻",
      items: [
        "Web Development",
        "App Development",
        "Hardware and Software Repair",
        "UI/UX Designing (Figma)",
        "Building personal projects",
        "Exploring new frameworks (Next.js, React, etc.)",
      ],
      description:
        "Transforming ideas into functional digital solutions through code and design.",
    },
    gaming: {
      title: "Gaming",
      icon: "🎮",
      items: [
        "Mobile Legends",
        "Call of Duty Mobile (previously)",
        "Far Cry series",
        "Grand Theft Auto series",
        "Red Dead Redemption",
        "Single-player story games",
      ],
      description:
        "Currently enjoying immersive single-player experiences and competitive mobile gaming.",
    },
    movies: {
      title: "Movies",
      icon: "🎬",
      items: [
        "Shin Kamen Rider (2023)",
        "Dinner in America",
        "Superman (2025)",
        "Everything Everywhere All At Once",
        "Spider-Man: Into the Spider-Verse",
        "22 Jump Street",
      ],
      description:
        "From superhero epics to unique indie films, I appreciate diverse storytelling.",
    },
    cinematography: {
      title: "Cinematography / Video Editing",
      icon: "🎥",
      items: [
        "Video editing with CapCut / DaVinci Resolve",
        "Exploring visual storytelling",
        "Learning composition and lighting",
        "Future plans for film projects",
      ],
      description:
        "Aspiring to explore visual storytelling when time and resources permit.",
    },
    toku: {
      title: "Tokusatsu",
      icon: "🦸",
      items: [
        "Kamen Rider series",
        "Super Sentai series",
        "Learning about suit design and lore",
        "Planning DIY belt projects",
        "Future costume creation goals",
      ],
      description:
        "Passionate about Japanese tokusatsu shows and aspiring to create my own gear.",
    },
    music: {
      title: "Music",
      icon: "🎵",
      items: [
        "Movie and show soundtracks",
        "Video game scores",
        "All genres appreciated",
        "Focus and relaxation aid",
        "Atmospheric and emotional pieces",
      ],
      description:
        "Music helps me focus and stay calm while respecting all genres equally.",
    },
  };

  const kamenRiderShows = [
    {
      title: "Kamen Rider Build",
      year: "2017-2018",
      description:
        "A genius physicist transforms into Kamen Rider Build using the Best Match system. My personal favorite for its incredible story and character development.",
      image: "/hobbies1/build.jpg",
      favoriteAspect: "Best Match system & Pandora's Box storyline",
    },
    {
      title: "Kamen Rider Zi-O",
      year: "2018-2019",
      description:
        "A time-traveling Rider who can transform into past Kamen Riders. A nostalgic tribute to the entire franchise.",
      image: "/hobbies1/zi-o.jpg",
      favoriteAspect: "Time travel & homage to past Riders",
    },
    {
      title: "Kamen Rider W",
      year: "2009-2010",
      description:
        "The two-in-one detective duo solving cases in Fuuto City. The perfect blend of detective story and tokusatsu action.",
      image: "/hobbies1/w.png",
      favoriteAspect: "Double protagonist system & detective theme",
    },
    {
      title: "Kamen Rider Fourze",
      year: "2011-2012",
      description:
        "A high school student becomes Kamen Rider Fourze to fight alien threats using space-themed powers. Fun and energetic series with a strong friendship theme.",
      image: "/hobbies1/fourze.png",
      favoriteAspect: "Space theme & high school setting",
    },
    {
      title: "Kamen Rider Zero-One",
      year: "2019-2020",
      description:
        "The first Reiwa era Rider fighting rogue Humagears with AI and technology themes. Very relevant to my IT studies.",
      image: "/hobbies1/zeroone.jpg",
      favoriteAspect: "AI technology themes & corporate battles",
    },
  ];

  const kamenRiders = [
    {
      name: "Kamen Rider Build",
      actor: "Atsuhiro Inukai",
      forms: ["RabbitTank", "KeyDragon", "Genius"],
      description:
        "Sentou Kiryu - a genius physicist with 7 PhDs. His journey from cold scientist to compassionate hero is incredible.",
      image: "/hobbies1/build-rider.jpg",
      quote: "The law of victory has been decided!",
    },
    {
      name: "Kamen Rider OOO",
      actor: "Shu Watanabe",
      forms: ["Tajador Combo", "Latorartar Combo", "Shauta Combo"],
      description:
        "Eiji Hino - a wandering hero who fights using Core Medals. His journey is about self-discovery and heroism.",
      image: "/hobbies1/ooo-rider.jpg",
      quote: "Let's put an end to this!",
    },
    {
      name: "Kamen Rider W",
      actor: "Renn Kiriyama & Masaki Suda",
      forms: ["CycloneJoker", "HeatMetal", "LunaTrigger"],
      description:
        "Shotaro Hidari & Philip - the hard-boiled detective and the living database. Their partnership is legendary.",
      image: "/hobbies1/w-rider.jpg",
      quote: "Now, count up your sins!",
    },
    {
      name: "Kamen Rider Decade",
      actor: "Masahiro Inoue",
      forms: ["Decade Form", "Complete Form", "Final Form"],
      description:
        "Tsukasa Kadoya - the traveler of worlds. His journey through all Kamen Rider universes is iconic.",
      image: "/hobbies1/decade-rider.jpg",
      quote: "I'm just a Kamen Rider passing by. Remember that!",
    },
  ];

  const favoriteMovies = [
    {
      title: "Shin Kamen Rider",
      year: "2023",
      genre: "Action / Sci-Fi",
      description:
        "Hideaki Anno's modern reimagining of the original Kamen Rider. A fresh take that honors the classic while bringing new depth to the story.",
      image: "/hobbies1/shin-kr.jpg",
      why: "Perfect blend of nostalgia and modern filmmaking",
    },
    {
      title: "Dinner in America",
      year: "2020",
      genre: "Comedy / Romance",
      description:
        "A punk rocker on the run and a shy young woman form an unexpected connection. Raw, authentic, and surprisingly heartwarming.",
      image: "/hobbies1/dinner-america.jpg",
      why: "Authentic characters and unexpected emotional depth",
    },
    {
      title: "Superman",
      year: "2025",
      genre: "Superhero / Action",
      description:
        "James Gunn's upcoming reboot focusing on a younger Superman balancing his Kryptonian heritage with his human upbringing.",
      image: "/hobbies1/superman-2025.jpg",
      why: "Anticipating a fresh take on the classic hero",
    },
    {
      title: "Everything Everywhere All At Once",
      year: "2022",
      genre: "Action / Comedy / Drama",
      description:
        "A multiversal adventure about family, meaning, and the chaos of existence. Creative, chaotic, and deeply moving.",
      image: "/hobbies1/eeaao.jpg",
      why: "Pushes creative boundaries in filmmaking",
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      year: "2018",
      genre: "Animation / Superhero",
      description:
        "A groundbreaking animated film that revolutionized the medium. The art style and storytelling are pure genius.",
      image: "/hobbies1/spiderverse.jpg",
      why: "Inspires my creativity in design and storytelling",
    },
    {
      title: "22 Jump Street",
      year: "2014",
      genre: "Comedy / Action",
      description:
        "Undercover cops Schmidt and Jenko return to college to take down a drug ring. Hilarious and brilliantly self-aware.",
      image: "/hobbies1/22-jump-street.jpg",
      why: "Perfect blend of action and comedy with great chemistry",
    },
  ];

  const nextShow = () => {
    setCurrentShowIndex((prev) => (prev + 1) % kamenRiderShows.length);
  };

  const prevShow = () => {
    setCurrentShowIndex(
      (prev) => (prev - 1 + kamenRiderShows.length) % kamenRiderShows.length
    );
  };

  const nextRider = () => {
    setCurrentRiderIndex((prev) => (prev + 1) % kamenRiders.length);
  };

  const prevRider = () => {
    setCurrentRiderIndex(
      (prev) => (prev - 1 + kamenRiders.length) % kamenRiders.length
    );
  };

  const nextMovie = () => {
    setCurrentMovieIndex((prev) => (prev + 1) % favoriteMovies.length);
  };

  const prevMovie = () => {
    setCurrentMovieIndex(
      (prev) => (prev - 1 + favoriteMovies.length) % favoriteMovies.length
    );
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
            className="text-lg hover:text-blue-500 transition-colors duration-300"
          >
            Education
          </Link>
          <Link
            href="/hobbies"
            className="text-lg font-semibold text-blue-500 transition-colors duration-300"
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

      {/* HOBBIES CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Page Title */}
        <div
          className={`text-center mb-16 transition-all duration-700 delay-200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">My Hobbies & Interests</h1>
          <p
            className={`text-xl max-w-2xl mx-auto mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Exploring passions that fuel my creativity, learning, and personal
            growth
          </p>
          <div
            className={`h-1 w-24 mx-auto transition-all duration-700 delay-300 ease-out ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}
          ></div>
        </div>

        {/* Personal Hobbies Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">My Passions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(hobbiesData).map(([key, hobby], index) => (
              <div
                key={key}
                className={`rounded-xl p-6 transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl">{hobby.icon}</span>
                  <h3 className="text-xl font-bold mt-2">{hobby.title}</h3>
                </div>

                <p
                  className={`text-center mb-4 italic ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {hobby.description}
                </p>

                <ul className="space-y-2">
                  {hobby.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`flex items-start gap-2 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          isDarkMode ? "bg-blue-400" : "bg-blue-600"
                        }`}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Media Carousel Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Media & Entertainment
          </h2>

          {/* Carousel Tabs */}
          <div className="flex justify-center mb-8">
            <div
              className={`flex rounded-lg p-1 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              {[
                { id: "shows", label: "Kamen Rider Shows" },
                { id: "riders", label: "Favorite Riders" },
                { id: "movies", label: "Favorite Movies" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCarousel(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                    activeCarousel === tab.id
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

          {/* Shows Carousel */}
          {activeCarousel === "shows" && (
            <div
              className={`transition-all duration-500 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={kamenRiderShows[currentShowIndex].image}
                      alt={kamenRiderShows[currentShowIndex].title}
                      className="w-full h-80 rounded-xl object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {kamenRiderShows[currentShowIndex].title}
                    </h3>
                    <p className="text-yellow-300 font-semibold mb-4">
                      {kamenRiderShows[currentShowIndex].year}
                    </p>
                    <p className="mb-4 leading-relaxed">
                      {kamenRiderShows[currentShowIndex].description}
                    </p>
                    <div className={`p-4 rounded-lg bg-black bg-opacity-30`}>
                      <p className="font-semibold mb-1">Why I Love It:</p>
                      <p className="text-sm">
                        {kamenRiderShows[currentShowIndex].favoriteAspect}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevShow}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } text-white`}
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextShow}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } text-white`}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {kamenRiderShows.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentShowIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentShowIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Riders Carousel */}
          {activeCarousel === "riders" && (
            <div
              className={`transition-all duration-500 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={kamenRiders[currentRiderIndex].image}
                      alt={kamenRiders[currentRiderIndex].name}
                      className="w-full h-80 rounded-xl object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {kamenRiders[currentRiderIndex].name}
                    </h3>
                    <p className="text-yellow-300 font-semibold mb-2">
                      Actor: {kamenRiders[currentRiderIndex].actor}
                    </p>
                    <p className="mb-4 leading-relaxed">
                      {kamenRiders[currentRiderIndex].description}
                    </p>

                    <div className="mb-4">
                      <p className="font-semibold mb-1">Notable Forms:</p>
                      <div className="flex flex-wrap gap-2">
                        {kamenRiders[currentRiderIndex].forms.map(
                          (form, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                isDarkMode
                                  ? "bg-yellow-400 bg-opacity-80 text-gray-900"
                                  : "bg-yellow-300 text-gray-900"
                              }`}
                            >
                              {form}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg bg-black bg-opacity-30`}>
                      <p className="font-semibold mb-1">Iconic Quote:</p>
                      <p className="italic">
                        "{kamenRiders[currentRiderIndex].quote}"
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevRider}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } text-white`}
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextRider}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } text-white`}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {kamenRiders.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentRiderIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentRiderIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Movies Carousel */}
          {activeCarousel === "movies" && (
            <div
              className={`transition-all duration-500 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={favoriteMovies[currentMovieIndex].image}
                      alt={favoriteMovies[currentMovieIndex].title}
                      className="w-full h-80 rounded-xl object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {favoriteMovies[currentMovieIndex].title}
                    </h3>
                    <p className="text-yellow-300 font-semibold mb-4">
                      {favoriteMovies[currentMovieIndex].year} •{" "}
                      {favoriteMovies[currentMovieIndex].genre}
                    </p>
                    <p className="mb-4 leading-relaxed">
                      {favoriteMovies[currentMovieIndex].description}
                    </p>
                    <div className={`p-4 rounded-lg bg-black bg-opacity-30`}>
                      <p className="font-semibold mb-1">Why I Love It:</p>
                      <p>{favoriteMovies[currentMovieIndex].why}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevMovie}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } text-white`}
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextMovie}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-100"
                  } text-white`}
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {favoriteMovies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentMovieIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentMovieIndex
                          ? "bg-white"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Personal Reflection */}
        <div
          className={`mt-16 p-8 rounded-xl text-center transition-all duration-700 delay-1200 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } ${isDarkMode ? "bg-gray-800" : "bg-gray-50"}`}
        >
          <h2 className="text-3xl font-bold mb-4">Why These Passions Matter</h2>
          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            "From coding to Kamen Rider, each hobby reflects different aspects
            of who I am. Technology satisfies my problem-solving nature, gaming
            provides immersive storytelling, movies inspire my creativity,
            tokusatsu fuels my imagination, and music keeps me focused. These
            diverse interests shape my perspective and approach to both work and
            life - always learning, always creating, and always finding
            inspiration in unexpected places."
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`mt-20 py-6 text-center border-t transition-all duration-700 delay-1400 ease-out ${
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
