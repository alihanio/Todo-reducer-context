import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import TodoList from "./TodoList";
import { useLanguage } from "../context/LanguageProvider";
import styled from "styled-components";

const Todos = () => {
  const { todos } = useContext(TodoContext);
  const { currentLang } = useLanguage();

  return (
    <Ul>
      {todos.length > 0 ? (
        todos.map((todo) => <TodoList key={todo.id} {...todo} />)
      ) : (
        <ListWarn>{currentLang.warning}</ListWarn>
      )}
    </Ul>
  );
};

export default Todos;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ListWarn = styled.p`
  font-size: 2rem;
  color: #4141ad;
`;
