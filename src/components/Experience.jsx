import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import { FormattedMessage } from "react-intl";

function Experience() {
  const experiences = [
    {
      id: 1,
      src: css,
      title: "css",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: github,
      title: "github",
      style: "shadow-white",
    },
    {
      id: 3,
      src: html,
      title: "html",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: node,
      title: "node",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: react,
      title: "react",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: tailwind,
      title: "tailwind",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2 capitalize">
            <FormattedMessage
              id="experience.title"
              defaultMessage="experience"
            />
          </p>
          <p className="py-6">
            <FormattedMessage
              id="experience.description"
              defaultMessage="These are technologies i've worked with"
            />
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 uppercase">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
