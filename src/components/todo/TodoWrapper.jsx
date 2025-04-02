import AllTodos from "./AllTodos";
import CreateTodo from "./CreateTodo";

const TodoWrapper = () => {
  return (
    <div>
      <h1>TODO APP</h1>
      <CreateTodo />
      <AllTodos />
    </div>
  );
};

export default TodoWrapper;
