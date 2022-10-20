import React from "react";
import "../css/NewTask.css";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
  const navigate = useNavigate();
  const newTaskHandler = async () => {};
  return (
    <div style={{ color: "black" }} className="centered-container">
      <div className="modal-box">
        <h1 className="title">Create a new task</h1>
        <div className="create-list">
          <input
            id="input"
            className="create-list-input"
            type="text"
            placeholder="enter a task name..."
          />
          <br />
          <div className="buttons">
            <button
              className="btn create-list-btn"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              className="btn create-list-btn"
              onClick={() => navigate("/lists")}
              // onClick={() =>
              //   newTaskHandler(document.getElementById("input").value)
              // }
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
