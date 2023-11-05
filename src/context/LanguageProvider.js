import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

const languageReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH":
      return action.payload;

    default:
      return state;
  }
};
export const LanguageProvider = ({ children }) => {
  const [language, dispatchLang] = useReducer(languageReducer, "en");

  const text = {
    en: {
      title: "TODO LIST",
      placeholder: "Type something...",
      validation: "Write something!",
      warning: "Your list is empty",
      buttonText: "update",
      cancel: "Cancel",
      delateText: "Delate",
      updateWarning: "Update to Do ",
      delateWarning: "Are you sure you want to delate to do...",
      clearAll: "Clear list",
    },
    ru: {
      title: "Список дел",
      placeholder: "Напечатайте что-нибудь...",
      validation: "Напишите что-нибудь!",
      warning: "Ваш список пуст",
      buttonText: "Обновить",
      cancel: "Назад",
      delateText: "Удалить",
      updateWarning: "Обновить задание",
      delateWarning: "Вы уверины что хотите удалить задание...",
      clearAll: "Очистить лист",
    },
  };
  const currentLang = text[language];
  return (
    <LanguageContext.Provider value={{ language, currentLang, dispatchLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("кичине окуп кел");
  }
  return context;
};
