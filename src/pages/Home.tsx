import AddTodo from "../components/AddTodo";
import { TodoProvider } from "../components/TodoContext";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <>
      <div className=" flex-col justify-center items-center border-2 border-black p-2  w-full m-auto mt-6">
        <TodoProvider>
          <AddTodo />
          <TodoList />
        </TodoProvider>
      </div>
    </>
  );
};

export default Home;
