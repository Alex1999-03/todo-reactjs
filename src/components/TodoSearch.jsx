import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/TodoSearch.css";

export const TodoSearch = () => {

  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Ingresa una tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
