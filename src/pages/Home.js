import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { BsPlusCircle } from "react-icons/bs";

const Home = () => {
  const { list, setList, task, setTask } = useGlobalContext();
  const [active, setActive] = useState(false);
  const { listId } = useParams();
  //console.log(listId);
  const navigate = useNavigate();
  const retrieveList = async () => {
    const res = await fetch("/lists", {
      method: "GET",
    });
    const data = await res.json();
    setList(data);
  };
  const retrieveTask = async () => {
    const res = await fetch(`/list/${listId}/tasks`, {
      method: "GET",
    });
    const data = await res.json();
    setTask(data);
    console.log(task);
  };
  const showactive = () => {
    setActive(true);
  };
  useEffect(() => {
    retrieveList();
  }, []);
  useEffect(() => {
    retrieveTask();
  }, [listId]);
  return (
    <div className="centered-container">
      <div className="task-manager-container">
        <div className="sidebar">
          <h1 className="title">Lists</h1>

          <div className="list-menu">
            {/* <a className="list-menu-item is-active">
              <p>List#1</p>
            </a>
            <a className="list-menu-item">
              <p>List#2</p>
            </a> */}

            {list &&
              list.map((item) => {
                return (
                  <div className="particular-list">
                    <a
                      className="list-menu-item"
                      key={item._id}
                      onClick={() => navigate(`/lists/${item._id}`)}
                    >
                      <p
                      // className={`${active ? "is-active" : ""}`}
                      // onClick={() => showactive()}
                      >
                        {item.title}
                      </p>
                    </a>
                  </div>
                );
              })}
          </div>
          {/* <button onClick={newListHandler} className="btn new-list-btn"> */}
          <Link to={"/new-list"}>
            <button className="btn new-list-btn">+New List</button>
          </Link>
        </div>
        <div className="tasks-list-container">
          <h1 className="title">Tasks</h1>
          <div className="tasks-list">
            {/* <p className="tasks-list-item">this is my task</p>
            <p className="tasks-list-item">this is my task</p>
            <p className="tasks-list-item complete">this is my task</p> */}
            {task &&
              task.map((item) => {
                return (
                  <p className="tasks-list-item" key={item._id}>
                    {item.title}
                  </p>
                );
              })}

            <BsPlusCircle className="addTaskBtn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
