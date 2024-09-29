import { createContext, useState } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Join Ready Set Code!",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru",
      completed: false,
    },
    {
      id: 3,
      title: "Study React fundamentals",
      completed: false,
    },
  ]);

  // console.log(todos);

  const toogleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const deleteTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(deleteTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const addTodos = todos.concat(newTodo);
    setTodos(addTodos);
  };

  return (
    <TodoContext.Provider value={{ toogleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.header}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  header: {
    fontSize: "36px",
  },
};

export default App;
