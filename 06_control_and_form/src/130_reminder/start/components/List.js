const List = ({todos, deleteTodo}) => {
  const complete = (id) => {
    deleteTodo(id)
  }
  return (
      <div>
        {todos.map(todo => {
          return (
            <div key={todo.id}>
              {/* 引数を指定する必要があるため、無名関数を使う */}
              <button onClick={() => complete(todo.id)}>完了</button>
              {todo.content}
            </div>
          );
        })}
      </div>
  )
};

export default List;