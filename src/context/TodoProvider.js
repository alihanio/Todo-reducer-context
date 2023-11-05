import { useReducer } from "react";
import { createContext } from "react";
import TodoReducer from "../Reducer/TodoReducer";
import { useEffect } from "react";

const initialState = {
  todos: [],
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState,()=>{
    const storedTodos =localStorage.getItem('todos')
    return{
      ...initialState,
      todos:storedTodos?JSON.parse(storedTodos):initialState.todos
    }
  });

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },[state.todos])
  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
