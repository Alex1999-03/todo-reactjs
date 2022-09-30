import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

const TodoProvider = (props) => {
  const { item, saveItem, loading, error } = useLocalStorage("TODOS", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = item.filter((todo) => todo.completed).length;
  const totalTodos = item.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newTodos = [...item];
    newTodos[todoIndex].completed = true;
    saveItem(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newTodos = [...item];
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...item];
    newTodos.push({ text, completed: false })
    saveItem(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
