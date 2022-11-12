import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateTask = (id) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const getTasks = async () => {
    axios.get(`http://localhost:5000/api/tasks/${id}`).then((res) => {
      // console.log(res);
      //   setTasks(res.data);
      setTitle(res.title);
      setContent(res.content);
      setCategory(res.category);
    });

    updateTasks();
    // console.log(tasks);
  };

  const updateTasks = async (e) => {
    e.preventDefault();
    console.log("updating");
    const info = { title, content, category };
    axios
      .put("http://localhost:5000/api/tasks/${id}", info)
      .then((res) => {
        console.log(res);
        // title, content, category;
        navigate("/");
      })
      .catch((err) => console.log(err));
    // console.log(tasks);
  };
  return (
    <div>
      <div>
        <section>
          <form onSubmit={getTasks}>
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

                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default UpdateTask;
