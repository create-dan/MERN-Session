import axios from "axios";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateTask from "./UpdateTask";

const Task = (props) => {
  const navigate = useNavigate();

  console.log(props);
  // const deleteTask = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/api/tasks/{id}`)
  //     .then((res) => {
  //       console.log("deleteed");
  //     })
  //     .catch((err) => console.log(err));
  // };

  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure")) {
      console.log(id);
      axios
        .delete(`http://localhost:5000/api/tasks/${id}`)
        .then((res) => {
          console.log("deleteed");
          window.location.reload(false);
        })
        .catch((err) => console.log(err));
    }
  };

  const updateTask = (id) => {
    <UpdateTask id={id} />;
    // navigate(`/task/${id}`);
  };

  return (
    <div>
      <div style={{ height: "vh" }}>
        {/* actual task starts */}

        <section className="d-flex  justify-content-center  my-5 rounded-bottom">
          <div className="card w-75 " style={{ height: "auto" }}>
            {" "}
            <h3
              className=" w-25 mx-2 mt-3 rounded-bottom text-center"
              style={{ backgroundColor: "#7DE5ED" }}
            >
              {props.task.title}{" "}
            </h3>
            <div
              className=" rounded mx-2  p-3"
              style={{ backgroundColor: "#CFF5E7", width: "auto" }}
            >
              <h3>{props.task.content}</h3>
            </div>
            <div>
              <h5
                className=" w-25 mx-2 my-3 rounded-bottom text-center"
                style={{ backgroundColor: "#7DE5ED" }}
              >
                Category
              </h5>

              <button
                onClick={() => deleteHandler(props.task._id)}
                className="btn btn-primary mx-2"
              >
                deletetask
              </button>
              {/* <button
                href={`/api/tasks/${props.task._id}`}
                className="btn btn-primary mx-2 "
              >
                Edit Task
              </button> */}
              <button
                onClick={() => updateTask(props.task._id)}
                className="btn btn-primary mx-2 "
              >
                Edit Task
              </button>
            </div>
          </div>
        </section>

        {/* actual task ends */}
      </div>
    </div>
  );
};

export default Task;
