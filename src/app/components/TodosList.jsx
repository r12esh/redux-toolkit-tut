import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/reducers/todoSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.todoData.todos);
  const dispatch = useDispatch();
  console.log(todos, "Selector se aya hai");
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text} </span>
          <button
            onClick={() => {
              dispatch(removeTodo(todo.id));
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
