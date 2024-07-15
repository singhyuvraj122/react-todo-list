import Input from "../components/input";
import Button from "../components/button";
import {useState, useContext} from "react";
import {TaskContextDispatch} from "../App";
import { v4 as uuid4 } from "uuid";

function AddTaskForm({ title = "Form Title" }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })
  const dispatch = useContext(TaskContextDispatch);

  function handleInputChange(e) {  
      setFormData(
        {
          ...formData,
          [e.target.name]: e.target.value,
        }
      );
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log(typeof formData.content);
    if(!formData.content.length || !formData.title.length) {
      console.log("empty form");
      return;
    } else {
      dispatch({
        type: "addTask",
        task: {...formData, id: uuid4()},
      });
    }
  }

  return (
    <form>
      <div
        style={{
          border: "2px solid red",
          borderRadius: "20px",
          width: "max-content",
          margin: "auto",
          padding: "10px 30px",
          textAlign: "center",
        }}
      >
        <div>
          <h3>{title}</h3>
        </div>
        <ul style={{
          margin: "0px",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "stretch",
          gap: "10px",
          listStyle: "none",
        }}>
          <li>
            <Input type="text" name="title" placeholder="enter task title" style={{
            borderWidth: "0px 0px 2px 0px",
            borderStyle: "solid",
            borderColor: "lightgray",
            padding: "5px 10px",
          }} onChange={handleInputChange} />
          </li>
          <li>
            <Input type="text" name="content" placeholder="enter task content" style={{
            borderWidth: "0px 0px 2px 0px",
            borderStyle: "solid",
            borderColor: "lightgray",
            padding: "5px 10px",
          }} onChange={handleInputChange} />
          </li>
          <li>
            <Button onClick={handleFormSubmit} type="submit">Add</Button>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default AddTaskForm;
