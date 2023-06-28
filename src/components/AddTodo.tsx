import { FormEvent, useState } from "react";
import { useTodoDispatch } from "./TodoContext";

const AddTodo = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useTodoDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    if (dispatch) {
      dispatch({ type: "add", text });
    }
    setText("");
  };

  return (
    <>
      <form className="flex w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 border-black w-full mr-2"
        />
        <button className="py-3 px-8 bg-slate-900 text-white">Add</button>
      </form>
    </>
  );
};

export default AddTodo;
