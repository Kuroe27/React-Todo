import AddTodo from "./components/AddTodo";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-black p-2  w-1/2 m-auto mt-6">
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </div>
  );
};

export default App;
