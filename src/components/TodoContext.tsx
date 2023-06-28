import { ReactNode, createContext, useContext, useReducer } from "react";

interface State {
  todos: Todo[];
  counter: number;
}

interface Action {
  type: string;
  id?: number;
  text?: string;
}
interface Todo {
  id: number;
  text: string;
  prevText: string;
  onEdit: boolean;
}

const TodoContext = createContext<Todo[] | null>(null);
const TodoDispatchContext = createContext<((action: Action) => void) | null>(
  null
);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [{ todos }, dispatch] = useReducer(reducer, {
    todos: [],
    counter: 1,
  });

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoContext() {
  return useContext(TodoContext);
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        todos: [
          ...state.todos,
          {
            id: state.counter,
            text: action.text!,
            prevText: action.text!,
            onEdit: false,
          },
        ],
        counter: state.counter + 1,
      };
    case "del":
      return {
        todos: state.todos.filter((t) => t.id !== action.id),
        counter: state.counter,
      };
    case "edit":
      return {
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, onEdit: !t.onEdit } : t
        ),
        counter: state.counter,
      };
    case "change":
      return {
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, text: action.text! } : t
        ),
        counter: state.counter,
      };
    case "cancel":
      return {
        todos: state.todos.map((t) =>
          t.id === action.id ? { ...t, onEdit: false, text: t.prevText } : t
        ),
        counter: state.counter,
      };
    case "save":
      return {
        todos: state.todos.map((t) =>
          t.id === action.id
            ? {
                ...t,
                onEdit: false,
                text: action.text!,
                prevText: action.text!,
              }
            : t
        ),
        counter: state.counter,
      };
    default:
      return state;
  }
}
