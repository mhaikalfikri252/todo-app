const TodoItem = ({ todo }) => {
  return (
    <div style={styles.title}>
      <p>{todo.title}</p>
    </div>
  );
};

const styles = {
  title: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
  },
};

export default TodoItem;
