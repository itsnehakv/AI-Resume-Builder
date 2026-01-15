import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <style>
        {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                    *{
                        font-family: "Poppins", sans-serif;
                    }`}
      </style>
      <section className="flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 py-4">
        <nav className="flex items-center justify-between gap-8 bg-white/60 border border-white rounded-full px-4 md:px-2 py-2.5 w-full max-w-3xl">
          <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
          <div className="w-0.5 h-8 bg-gray-50 hidden md:flex"></div>
          <div
            id="menu"
            className={`max-md:absolute max-md:bg-white/70 max-md:h-[785px] max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:backdrop-blur flex items-center gap-8 z-50 md:gap-10 flex-1 ${
              mobileOpen ? "max-md:w-full" : "max-md:w-0"
            }`}
          >
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 hover:text-gray-700 text-sm"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 hover:text-gray-700 text-sm"
            >
              Services
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 hover:text-gray-700 text-sm"
            >
              Reviews
            </a>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-gray-600 hover:text-gray-700 text-sm"
            >
              Contact
            </a>

            <button
              id="close-menu"
              onClick={() => setMobileOpen(false)}
              className="md:hidden bg-violet-500 active:bg-violet-600 text-white p-2 rounded-md aspect-square font-medium transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2 md:pr-1">
            <Link
              to="/app?state=register"
              className="hidden md:inline-block bg-violet-600 hover:bg-violet-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm transition cursor-pointer"
            >
              Get Started
            </Link>
            <Link
              to="/app?state=login"
              className="hidden md:inline-block bg-violet-600 hover:bg-violet-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm transition cursor-pointer"
            >
              Login
            </Link>

            <button
              id="open-menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-gray-700 p-2 rounded-md aspect-square font-medium transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5 mt-30 rounded-full bg-white/50 border border-white">
          <div className="relative flex size-3.5 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-300"></span>
            <span className="relative inline-flex size-2 rounded-full bg-green-600"></span>
          </div>
          <p className="text-sm text-black/60">
            Join 12,450+ brands growing with us
          </p>
        </div>

        <h1 className="text-4xl md:text-[66px]/19 text-center max-w-2xl mt-8 text-gray-800 bg-clip-text leading-tight font-medium">
          Land your dream job with{" "}
          <span className="text-violet-600">AI-powered resumes.</span>
        </h1>
        <p className="text-sm text-gray-600 text-center max-w-[900px] mt-4">
          Create, edit and download professional resumes in minutes with AI
          powered assistance.
        </p>

        <div className="flex gap-3 mt-10">
          <Link
            to="/app"
            className="bg-violet-600 hover:bg-violet-700 text-white text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer"
          >
            Get Started Now
          </Link>
          <button className="bg-white hover:bg-white/5 border border-violet-400 text-gray-600 text-xs md:text-sm px-5 py-3 rounded-lg transition cursor-pointer">
            Book a demo
          </button>
        </div>

        <div className="w-full max-w-[800px] h-[3px] mt-10 bg-linear-to-r from-white/10 via-violet-600 to-white/10"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full">
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
              20+
            </h2>
            <p className="text-xs md:text-sm text-gray-500">Years Experience</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
              12k+
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              Projects Completed
            </p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
              5k+
            </h2>
            <p className="text-xs md:text-sm text-gray-500">Happy Customers</p>
          </div>
          <div className="text-center">
            <h2 className="font-medium text-2xl md:text-3xl text-gray-800">
              5+
            </h2>
            <p className="text-xs md:text-sm text-gray-500">Countries</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
