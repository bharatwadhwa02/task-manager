import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
//pages
import Home from "./pages/Home";
import CreateList from "./pages/CreateList";
import ParticularList from "./pages/ParticularList";
import NewTask from "./pages/NewTask";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/lists"} />}></Route>
        <Route path="/lists" element={<Home />} />
        <Route path="/new-list" element={<CreateList />} />
        <Route path="/lists/:listId" element={<Home />} />
        <Route path="/lists/:listId/new-task" element={<NewTask />} />
      </Routes>
    </Router>
  );
}

export default App;
