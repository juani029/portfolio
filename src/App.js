// import { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { LangProvider } from "./context/langContext";

function App() {
  // console.log(context);
  return (
    <div>
      <LangProvider>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        <SocialLinks />
      </LangProvider>
    </div>
  );
}

export default App;
