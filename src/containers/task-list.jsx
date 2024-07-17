// import {} from "react";
import Card from "../components/card";
import Button from "../components/button";
import { useContext, useState, useEffect } from "react";
import { TaskContext, TaskContextDispatch } from "../App";
import AddTaskForm from "./add-task-form";

function TaskList() {
  const tasks = useContext(TaskContext);
  const dispatch = useContext(TaskContextDispatch);
  const [editTask, setEditTask] = useState(null);
  const [editMode, setEditMode] = useState(false);

  function handleEditTask(task) {
    setEditTask(task);
    setEditMode(true);
  }

  // useEffect(() => {
  //   console.log("editTask = ", editTask);
  //   console.log("editMode = ", editMode);
  // }, [editTask, editMode]);

  const listItems =
    tasks.length !== 0 ? (
      tasks.map((task) => {
        return (
          <li key={task.id}>
            <Card title={task.title} content={task.content}>
              <div style={{ display: "flex" }}>
                <div>
                  <Button
                    onClick={(e) => {
                      console.log(task);
                      handleEditTask(task);
                    }}
                  >
                    Edit
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={(e) => {
                      dispatch({
                        type: "deleteTask",
                        id: task.id,
                      });
                    }}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          </li>
        );
      })
    ) : (
      <p>No Task in List</p>
    );

  return (
    <>
      <ul
        style={{
          padding: "0px",
          maxWidth: "80vw",
          minWidth: "maxContent",
          minHeight: "maxContent",
          maxHeight: "100%",
          margin: "auto",
          overflow: "auto",
          padding: "10px",
          marginBottom: "20px",
          border: "2px solid green",
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {listItems}
      </ul>
      {editMode && editTask? <AddTaskForm editMode={editMode} editTask={editTask} />: null }
    </>
  );
}

export default TaskList;
