import { ChangeEvent } from "react";
import { useTodoContext, useTodoDispatch } from "./TodoContext";

const TodoList = () => {
  const todos = useTodoContext();
  const dispatch = useTodoDispatch();
  if (dispatch === null) {
    return <p>No todos...</p>;
  }
  if (todos === null) {
    return <p>No todos...</p>;
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    dispatch({
      type: "change",
      id: id,
      text: e.target.value,
    });
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: "del",
      id: id,
    });
  };

  const handleEdit = (id: number) => {
    dispatch({
      type: "edit",
      id: id,
    });
  };

  const handleCancel = (id: number) => {
    dispatch({
      type: "cancel",
      id: id,
    });
  };

  const handleSave = (id: number, text: string) => {
    dispatch({
      type: "save",
      id: id,
      text: text,
    });
  };
  return (
    <ul>
      {todos.map((t) => (
        <div key={t.id}>
          <li className="flex w-full text-2xl text-center items-center ">
            <p>{t.id}</p>

            {t.onEdit ? (
              <>
                <input
                  type="text"
                  className="text-center"
                  value={t.text}
                  onChange={(e) => handleChange(e, t.id)}
                />

                <button
                  className="ml-2 p-1 bg-red-100"
                  onClick={() => handleDelete(t.id)}
                >
                  Del
                </button>
                <button onClick={() => handleCancel(t.id)}>Cancel</button>
                <button
                  className="bg-blue-500"
                  onClick={() => handleSave(t.id, t.text)}
                >
                  Save
                </button>
              </>
            ) : (
              <div>
                <span>{t.text}</span>
                <button
                  className="ml-2 p-1 bg-red-500"
                  onClick={() => handleDelete(t.id)}
                >
                  Del
                </button>
                <button
                  className="bg-blue-500"
                  onClick={() => handleEdit(t.id)}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
