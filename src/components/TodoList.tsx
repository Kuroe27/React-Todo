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
    <div className="w-full ">
      <ul>
        {todos.map((t) => (
          <div key={t.id}>
            <li className=" w-full text-2xl text-center items-center break-words mt-2">
              {t.onEdit ? (
                <div className="flex justify-between">
                  <input
                    type="text"
                    value={t.text}
                    onChange={(e) => handleChange(e, t.id)}
                    className="text-cente px-4 py-1 mr-2 border-2 border-black"
                  />
                  <div className="buttons">
                    <button
                      className="px-4 py-1 mr-2 border-2 border-black"
                      onClick={() => handleDelete(t.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="px-4 py-1 mr-2 border-2 border-black"
                      onClick={() => handleSave(t.id, t.text)}
                    >
                      Save
                    </button>
                    <button
                      className="px-4 py-1 mr-2 border-2 border-black"
                      onClick={() => handleCancel(t.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between">
                  <p className="break-all">{t.text}</p>
                  <div className="buttons">
                    <button
                      className="px-4 py-1 mr-2 border-2 border-black "
                      onClick={() => handleDelete(t.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="px-9 py-1 border-2 border-black"
                      onClick={() => handleEdit(t.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
