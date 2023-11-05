import React from "react";
import { useContext } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { TodoContext } from "../context/TodoProvider";
import { useState } from "react";
import { useLanguage } from "../context/LanguageProvider";
import styled from "styled-components";

const Form = () => {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");
  const [error, setError] = useState();
  const { currentLang } = useLanguage();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length < 1) {
      setError(currentLang.validation);
    } else {
      setError("");
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text,
        isChecked: false,
      };
      dispatch({ type: "Add-Todo", payload: newTodo });
      setText("");
    }
  };

  const change = (e) => {
    setText(e.target.value);
    if ((e.target.value = "")) {
      setError(currentLang.validation);
    } else {
      setError("");
    }
  };

  return (
    <FormCont onSubmit={handleSubmit}>
      <div>
        <AddInput
          type="text"
          placeholder={currentLang.placeholder}
          value={text}
          onChange={change}
        />
        <Warning>{error}</Warning>
      </div>
      <AddBtn type="submit">
        <BiPlusCircle />
      </AddBtn>
    </FormCont>
  );
};

export default Form;

const AddInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 3px solid #4608ad;
  width: 36rem;
  height: 3rem;
  padding: 1rem;
  font-size: 1rem;
  margin-right: 1rem;
  &::placeholder {
    font-size: 1rem;
  }
`;
const FormCont = styled.form`
  display: flex;
`;
const AddBtn = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: #f0ebf9;
  border: none;
  border-radius: 20%;
  color: #4608ad;
  font-size: 2rem;
  margin-bottom:1rem;
  &:active {
    background-color: #4608ad;
    color: #f0ebf9;
  }
`;
const Warning = styled.p`
  font-size: 1.2rem;
  color: #ff0000;
`;
