import React from "react";
import wogapp from "../assets/portfolio/wogapp.png";
import gymApp from "../assets/portfolio/gymApp.png";
import GalleryApp from "../assets/portfolio/GalleryApp.png";
import Freelancer from "../assets/portfolio/Freelancer.png";
import { FormattedMessage } from "react-intl";

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      src: wogapp,
      hrefDemo: "https://wog-app.vercel.app/",
      hrefCode: "https://github.com/juani029/PIVideoGames",
    },
    {
      id: 2,
      src: gymApp,
      hrefDemo: "https://pgym-henry-final.vercel.app/",
      hrefCode: "https://github.com/agskbr/PF-Gym-Control-App",
    },
    {
      id: 3,
      src: GalleryApp,
      hrefDemo: "https://posts-mern-app.vercel.app/",
      hrefCode: "https://github.com/juani029/MernAppCrud",
    },
    {
      id: 4,
      src: Freelancer,
      hrefDemo: "https://website-freelancer-js.netlify.app/",
      hrefCode: "https://github.com/juani029/sitio-web-freelancer",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            <FormattedMessage
              id="portfolio.description"
              defaultMessage="Check out some of my work right here"
            />
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hrefDemo, hrefCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={hrefDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded-md cursor-pointer text-center hover:shadow-md hover:shadow-gray-600"
                >
                  <FormattedMessage
                    id="portfolio.first-button"
                    defaultMessage="Deploy"
                  />
                </a>
                <a
                  href={hrefCode}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border rounded-md cursor-pointer text-center hover:shadow-md hover:shadow-gray-600"
                >
                  <FormattedMessage
                    id="portfolio.last-button"
                    defaultMessage="Code"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
