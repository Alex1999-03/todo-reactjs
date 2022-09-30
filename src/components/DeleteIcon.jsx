import { TodoIcon } from "./TodoIcon";

export const DeleteIcon = ({ onDelete }) => {
  return <TodoIcon type="delete" color={"#ef233c"} onClick={onDelete} />;
};
