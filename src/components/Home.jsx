import React from "react";
import fotoPerfil from "../assets/fotoPerfil.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";

function Home() {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full md:w-3/4">
          <h2 className="text-4xl sm:text-7xl font-bold text-white text-start">
            <FormattedMessage
              id="profile.rol"
              defaultMessage="I'm Full Stack Developer"
            />
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
            <FormattedMessage
              id="profile.description"
              defaultMessage="I have one year of experience in software construction. I am currently specializing in developing applications using the MERN stack (MongoDb, Express Js, React Js and Node Js)."
            />
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-3/4 sm:w-2/4">
          <img
            src={fotoPerfil}
            alt="myProfile"
            className="rounded-2xl mx-auto w-full mb-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
