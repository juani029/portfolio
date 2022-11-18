import { useState } from "react";
import { useLangs } from "../context/langContext";
import { FaBars, FaTimes } from "react-icons/fa";
import flagEs from "../assets/icons/es.svg";
import flagGb from "../assets/icons/gb.svg";
import { Link } from "react-scroll";
import { FormattedMessage } from "react-intl";

function NavBar() {
  const [nav, setNav] = useState(false);
  const [widthLang, setWidthLang] = useState("w-1/2");
  const { setLanguage } = useLangs();
  // console.log(setLanguage);
  const links = [
    {
      key: 1,
      link: "home",
      id: "nav.first-link",
      defaultMessage: "home",
    },
    {
      key: 2,
      link: "about",
      id: "nav.second-link",
      defaultMessage: "about",
    },
    {
      key: 3,
      link: "portfolio",
      id: "nav.third-link",
      defaultMessage: "portfolio",
    },
    {
      key: 4,
      link: "experience",
      id: "nav.fourth-link",
      defaultMessage: "experience",
    },
    {
      key: 5,
      link: "contact",
      id: "nav.fifth-link",
      defaultMessage: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed">
      <div className="flex ml-2 md:ml-4 md:mt-2 mr-3 py-2 justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-signature">Juani</h1>
      </div>

      <div className="flex w-48 items-center justify-between">
        <div className={widthLang}>
          <p className="capitalize font-medium text-gray-500 justify-start">
            <FormattedMessage id="nav.language" defaultMessage="lang" />
          </p>
        </div>
        <div className="w-16">
          <img
            onClick={() => {
              setLanguage("es-AR");
              setWidthLang("w-1/3");
            }}
            className="cursor-pointer block w-10 ml-2"
            src={flagEs}
            alt=""
          />
        </div>
        <div className="w-16">
          <img
            onClick={() => {
              setLanguage("en-US");
              setWidthLang("w-1/2");
            }}
            className="cursor-pointer block w-10"
            src={flagGb}
            alt=""
          />
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ link, id, key, defaultMessage }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            key={key}
          >
            <Link to={link} smooth duration={500}>
              <FormattedMessage id={id} defaultMessage={defaultMessage} />
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer z-10 pr-4 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ key, link, id, defaultMessage }) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              key={key}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                <FormattedMessage id={id} defaultMessage={defaultMessage} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NavBar;
