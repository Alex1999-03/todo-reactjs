import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

import "../styles/TodoForm.css";

export const TodoForm = () => {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal((prevState) => !prevState);
  };

  const onAdd = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addTodo(formData.get("text"));
    setOpenModal((prevState) => !prevState);
  };

  return (
    <form className="todo-form" onSubmit={onAdd}>
      <label></label>
      <textarea name="text" placeholder="Ingregar una tarea"></textarea>
      <div className="todo-form__button-container">
        <button className="todo-form__button todo-form__button--cancel" onClick={onCancel}>Cancelar</button>
        <button className="todo-form__button todo-form__button--add" type="submit">Añadir</button>
      </div>
    </form>
  );
};
