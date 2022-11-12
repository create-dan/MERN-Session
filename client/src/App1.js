import logo from "./logo.svg";
import "./App.css";
import "./components/Linkdin";
import { MyComp, MyComp2 } from "./components/Linkdin";
import superhero from "superhero-name-library";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [heros, setHeros] = useState(superhero.allNames(5));
  const [tasks, setTasks] = useState([]);

  let cnt = 0;

  const getTasks = async () => {
    axios.get("http://localhost:5000/tasks").then((res) => {
      setTasks(res.data);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p></p>

        <button
          onClick={() => {
            let theData = heros.slice(1, heros.length);
            setHeros(theData);
          }}
        >
          Delete
        </button>
        <br />

        <button
          onClick={() => {
            let newData = superhero.random();
            let theData = heros;
            theData.push(newData);

            setHeros(theData);
          }}
        >
          Add
        </button>

        {tasks.map((task, i) => {
          console.log(task);
          {
            return <div>{task.task}</div>;
          }
        })}

        {heros.map((element, i) => (
          <MyComp key={i} data={element} cnt={cnt++} />
        ))}

        <MyComp2 />
      </header>
    </div>
  );
}

export default App;
