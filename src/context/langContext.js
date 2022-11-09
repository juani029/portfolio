import { createContext, useState, useContext } from "react";
import { IntlProvider } from "react-intl";

import messageEnglish from "../languages/en-US.json";
import messageSpanish from "../languages/es-AR.json";
//creo el contexto
const langContext = createContext();

export const useLangs = () => {
  const context = useContext(langContext);
  if (!context) throw new Error("Lang Provider is missing");
  return context;
};

const LangProvider = ({ children }) => {
  const [messages, setMessages] = useState(messageEnglish);
  const [locale, setLocale] = useState("en-US");

  const setLanguage = (lang) => {
    switch (lang) {
      case "es-AR":
        // console.log("cambio el idioma a", lang);
        setMessages(messageSpanish);
        setLocale("es-AR");
        break;
      case "en-US":
        // console.log("cambio el idioma a", lang);
        setMessages(messageEnglish);
        setLocale("en-US");
        break;

      default:
        setMessages(messageEnglish);
        setLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{ setLanguage, messages, locale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
