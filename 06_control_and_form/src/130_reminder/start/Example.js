import Todo from "./components/Todo";


const Example = () => {
  return (
    <>
      <h2>Reminder</h2>
      {/* {todos.map(todo => <li key={todo.id}>{todo.content}</li>)} */}
      <Todo />
    </>
  );
};

export default Example;
