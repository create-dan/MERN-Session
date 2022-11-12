import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Task from "./Task";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  // const navigate = useNavigate();

  const getTasks = async () => {
    axios.get("http://localhost:5000/api/tasks").then((res) => {
      // console.log(res);
      setTasks(res.data);
    });
    // console.log(tasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/createtask");
  };

  return (
    // const navigate = useNavigate();

    <>
      <div className="align-items-center justify-content-center d-flex mt-3">
        <button className="px-4 btn btn-danger" onClick={routeChange}>
          Create Task +
        </button>{" "}
      </div>
      {tasks
        .map((task, i) => {
          return (
            <div>
              <Task task={task} key={i} />;
            </div>
          );
        })
        .reverse()}
    </>
  );
};

export default HomePage;
