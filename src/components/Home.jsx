import React from "react";
import fotoPerfil from "../assets/fotoPerfil.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            consequatur qui nihil quis quas, quam beatae eius aliquam tempora
            maxime?
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={fotoPerfil}
            alt="myProfile"
            className="rounded-2xl mx-auto w-2/3 mb-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;