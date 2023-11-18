import "./App.css";
import AddTodo from "./app/components/AddTodo";
import TodosList from "./app/components/TodosList";

function App() {
  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          borderRight: "2px solid white",
          padding: "20px",
        }}
      >
        <AddTodo />
      </div>
      <div style={{ width: "50%", height: "100%" }}>
        <TodosList />
      </div>
    </main>
  );
}

export default App;
