import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/CreateList.css";
import { useGlobalContext } from "../context";

const CreateList = () => {
  const { list, setList } = useGlobalContext();

  let navigate = useNavigate();

  const newListHandler = async (name) => {
    const res = await fetch("/lists", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: name,
      }),
    });
    const data = await res.json();

    console.log(data);
    // console.log(typeof parseInt(data._id));
    // console.log(typeof data.title);
    // setList({ _id: parseInt(data._id), title: data.title });
    // console.log(list);
    navigate(`/lists/${data._id}`);
  };

  return (
    <div style={{ color: "black" }} className="centered-container">
      <div className="modal-box">
        <h1 className="title">create a new list</h1>
        <div className="create-list">
          <input
            id="input"
            className="create-list-input"
            type="text"
            placeholder="create a list"
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
              onClick={() =>
                newListHandler(document.getElementById("input").value)
              }
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateList;
