import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SingleTask from "./components/SingleTask";
import UpdateTask from "./components/UpdateTask";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/createtask" element={<CreateTask />} exact />
            {/* <Route path="/task/:id" element={<SingleTask />} exact /> */}
            <Route path="/task/:id" element={<UpdateTask />} exact />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
