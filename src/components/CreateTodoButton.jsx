import "../styles/CreateTodoButton.css";

export const CreateTodoButton = ({ setOpenModal }) => {
  const onClickButton = (message) => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Aqui deberia abrirse una ventana modal.")}
    >
      +
    </button>
  );
};
