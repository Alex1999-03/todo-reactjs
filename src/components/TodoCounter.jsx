import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/TodoCounter.css";

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Haz completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};
