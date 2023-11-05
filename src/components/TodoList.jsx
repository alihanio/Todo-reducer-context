import React from "react";
import { useContext } from "react";
import { BiCheck, BiEdit, BiTrashAlt } from "react-icons/bi";
import { TodoContext } from "../context/TodoProvider";
import { useState } from "react";
import Modal from "./Modal";
import { useLanguage } from "../context/LanguageProvider";
import styled from "styled-components";
const TodoList = ({ id, isChecked, text }) => {
  const { currentLang } = useLanguage();
  const { dispatch } = useContext(TodoContext);
  const [newText, setNewText] = useState(text);
  const [isOpen, setIsOpen] = useState(false);
  const [delateModal, setDelateModal] = useState(false);
  const checkTodo = () => {
    dispatch({ type: "Check-Todo", payload: id });
  };
  const delateTodo = () => {
    dispatch({ type: "Delate-Todo", payload: id });
  };
  const editTodo = () => {
    dispatch({ type: "Change-Todo", payload: { newText, id } });
    setIsOpen((prev) => !prev);
  };

  const updateModal = () => {
    setIsOpen((prev) => !prev);
  };
  const changeTextValue = (e) => {
    setNewText(e.target.value);
  };

  const toggleDelateModal = () => {
    setDelateModal((prev) => !prev);
  };

  return (
    <List key={id}>
      <CheckBtn onClick={checkTodo}>
        <BiCheck />
      </CheckBtn>
      <ListText className={`text ${isChecked && "liChecked"}`}>{text}</ListText>
      <UpdateBtn onClick={updateModal} className={`${isChecked && "none"}`}>
        <BiEdit />
      </UpdateBtn>
      <DelateBtn onClick={toggleDelateModal}>
        <BiTrashAlt />
      </DelateBtn>

      {isOpen && (
        <Modal onClose={updateModal}>
          <ModalHeading>{currentLang.updateWarning}</ModalHeading>
          <UpdateInput type="text" value={newText} onChange={changeTextValue} />
          <Update onClick={editTodo}>{currentLang.buttonText}</Update>
        </Modal>
      )}
      {delateModal && (
        <Modal onClose={toggleDelateModal}>
          <ModalHeading>{currentLang.delateWarning}</ModalHeading>
          <Delate onClick={delateTodo}>{currentLang.delateText}</Delate>
        </Modal>
      )}
    </List>
  );
};

export default TodoList;

const List = styled.li`
  width: 30rem;
  height: 3rem;
  background-color: #f0ebf9;
  display: flex;
  align-items: center;
  position: relative;
`;
const CheckBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: #4608ad;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  position: absolute;
  left: 0.5rem;
  &:active {
    color: green;
  }
`;
const ListText = styled.p`
  font-size: 1rem;
  position: absolute;
  left: 3rem;
  color: #4608ad;
`;
const UpdateBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: #4608ad;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 4rem;
  &:active {
    color: blue;
  }
`;

const DelateBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: #4608ad;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  position: absolute;
  right: 1rem;
  &:active {
    color: red;
  }
`;
const ModalHeading = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const UpdateInput = styled.input`
  width: 20rem;
  height: 2rem;
  border: none;
  padding:1rem;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
`;
const Delate = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #cf222e;
  color: white;
  border: none;
  font-weight: bold;
  margin-left: 2rem;
  &:hover {
    background-color: #ff0000;
    color: black;
  }
  &:focus {
    background-color: #cf222e;
    color: white;
  }
`;
const Update = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #0f817a;
  color: white;
  border: none;
  font-weight: bold;
  margin-left: 2rem;
  &:hover {
    background-color: #0a4750;
    color: black;
  }
  &:focus {
    background-color: #0f817a;
    color: white;
  }
`;
