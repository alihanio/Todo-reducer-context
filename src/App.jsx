import React from "react";
import "./App.css";
import Head from "./components/Head";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useContext } from "react";
import { TodoContext } from "./context/TodoProvider";
import { useLanguage } from "./context/LanguageProvider";
import styled from "styled-components";

const App = () => {
  const { dispatch } = useContext(TodoContext);
  const { currentLang } = useLanguage();
  const delateAll = () => {
    dispatch({ type: "All-Delate" });
  };
  return (
    <Conteiner>
      <Head />
      <Form />
      <Todos />
      <ClearBtn onClick={delateAll}>{currentLang.clearAll}</ClearBtn>
    </Conteiner>
  );
};

export default App;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ClearBtn = styled.button`
  margin-top: 2rem;
  padding: 1rem;
  border: none;
  background-color: #f0ebf9;
  color: #4608ad;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &:active {
    background-color: #4608ad;
    color: #f0ebf9;
  }
`;
