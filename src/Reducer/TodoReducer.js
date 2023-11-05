const TodoReducer = (state, action) => {
  switch (action.type) {
    case "Add-Todo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "Check-Todo":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isChecked: !todo.isChecked,
            };
          }
          return todo;
        }),
      };
    case "Delate-Todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "Change-Todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.newText }
            : { ...todo }
        ),
      };
      case  'All-Delate':
        return {
            todos:[]
        }
    default:
      return state;
  }
};

export default TodoReducer;
