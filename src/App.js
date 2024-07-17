import "./App.css";
import Button from "./components/button";
import Card from "./components/card";
import AddTaskForm from "./containers/add-task-form";
import { createContext, useState, useReducer } from "react";
import TaskList from "./containers/task-list";
import { v4 as uuid4 } from "uuid";

export const TaskContext = createContext();
export const TaskContextDispatch = createContext();

const initialTasks = [];

function taskReducer(tasks, action) {
  switch (action.type) {
    case "addTask": {
      return [...tasks, action.task];
    }
    case "deleteTask": {
      let updatedTasks = tasks.filter((task) => {
        return task.id !== action.id;
      });
      console.log(updatedTasks);
      return updatedTasks;
    }
    case "updateTask": {
      console.log("edit task");
      console.log("old task list ", tasks);
      let updatedTaskList = tasks.map(task => {
        if(task.id === action.task.id) {
          return {...task, ...action.task}
        }
        return task;
      });
      console.log("new task list ", updatedTaskList);
      return updatedTaskList;
    }
    case "getTask": {
      return tasks;
    }
  }
}

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <TaskContextDispatch.Provider value={dispatch}>
        <div style={{
          height: "95vh",
          minWidth: "maxContent",
          padding: "10px",
          overflow: "auto",
          border: "2px solid red",
          display: "flex",
          flexWrap: "wrap",

          justifyContent: "space-evenly",
        }}>
          <div>
            {/* Add Task Form Component */}
            <h3>Add Task Form Component</h3>
            <AddTaskForm />
          </div>
          <div style={{minHeight: "40%", maxHeight: "80%"}}>
            {/* Task List Item Component */}
            <h3>Task List Component</h3>
            <TaskList />
          </div>
        </div>
        
        
      </TaskContextDispatch.Provider>
    </TaskContext.Provider>
  );
}

export default App;
