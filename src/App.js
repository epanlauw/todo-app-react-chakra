import { Text, VStack } from "@chakra-ui/react";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const todoList = [
    { id: 1, text: "Buy eggs" },
    { id: 2, text: "Walk the dog" },
    { id: 3, text: "Watch a movie" },
  ];

  const [todos, setTodos] = useState(todoList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });

    setTodos(newTodos);
    console.log(newTodos);
  };

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, updateTodo) => {
    const updateItem = todos.map((todo) => {
      return todo.id === id ? updateTodo : todo;
    });
    setTodos(updateItem);
  };

  return (
    <VStack p={5}>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Todo App
      </Text>
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
