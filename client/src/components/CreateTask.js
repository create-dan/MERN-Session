import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();
  const createTasks = async (e) => {
    e.preventDefault();
    console.log("created");
    const info = { title, content, category };
    axios
      .post("http://localhost:5000/api/tasks/create", info)
      .then((res) => {
        console.log(res);
        // title, content, category;
        navigate("/");
      })
      .catch((err) => console.log(err));
    // console.log(tasks);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content || !category) return;

    // createTasks();

    resetHandler();
    navigate("/");
  };

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };
  return (
    <div>
      <section>
        <form onSubmit={createTasks}>
          <div className="container">
            <div>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Content</label>
                <input
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label>Category</label>
                <input
                  type="text"
                  class="form-control"
                  id="category"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <button  class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateTask;
