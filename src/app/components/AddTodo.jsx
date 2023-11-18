import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/reducers/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    dispatch(addTodo(newTodo));
    setNewTodo("");
    console.log("Hua na submit call in add todo");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ width: "100%" }}
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
