import { useState } from "react";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];
  // return (
  //   todosList.map(todoList => {
  //     return <li key={todoList.id}><button onClick={complete}>完了</button>{todoList.content}</li>
  //   })
  // );

  const [todos, setTodos] = useState(todosList);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo}/>
    </>
  )
};

export default Todo;
