/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { toogleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed == true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={styles.title}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toogleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

const styles = {
  title: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  checkbox: {
    marginRight: "10px",
    width: "18px",
    height: "18px",
  },
  button: {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default TodoItem;
