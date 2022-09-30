import { ReactComponent as CheckIcon } from "../assets/icons/check.svg";
import { ReactComponent as DeleteIcon } from "../assets/icons/delete.svg";

import "../styles/TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckIcon className="icon icon--check" fill={color} />,
  delete: (color) => <DeleteIcon className="icon icon--delete" fill={color} />,
};

export const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span
      className={`icon-container icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};
