import axios from "axios";
import { useEffect } from "react";

const CreateTodo = ({ todos, handle, handleSubmit }) => {
  useEffect(() => {
    async function getData() {
      // let {data} = axios.post("http://localhost:9001/v1/todos/add");
      
    }
    getData();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Add a new task"
            value={todos}
            onChange={handle}
          />
        </label>
        <label>
          Priority
          <input type="radio" name="priority" value="low" />
          low
          <input type="radio" name="priority" value="medium" />
          medium
          <input type="radio" name="priority" value="high" />
          high
        </label>
        <input type="submit" value="Add"/>
      </form>
    </div>
  );
};

export default CreateTodo;
