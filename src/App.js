import "./App.css";
import AddTask from "./pages/add-task";
import Button from "./components/button";
import Input from "./components/input";
import Card from "./components/card";
import Form from "./pages/addTaskForm";

function App() {
  return (
    <>
      <h1>hello world</h1>
      {/* Task List Item Component */}
      <h3>Task List Component</h3>
      <Card title="Task 1" content="Drink milk">
        <div style={{display: "flex",}}>
          <div>
            <Button>Edit</Button>
          </div>
          <div>
            <Button>Delete</Button>
          </div>
        </div>
      </Card>
      {/* Add Task Form Component */}
      <h3>Add Task Form Component</h3>
      <Form />
    </>
  );
}

export default App;
