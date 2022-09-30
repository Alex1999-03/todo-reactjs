import "../styles/TodosLoading.css";

export const TodosLoading = () => {
  return (
    <div className="todo-loading__container">
      <span className="todo-loading__complete-icon"></span>
      <p className="todo-loading__text">Cargando los TODOS...</p>
      <span className="todo-loading__delete-icon"></span>
    </div>
  );
};
