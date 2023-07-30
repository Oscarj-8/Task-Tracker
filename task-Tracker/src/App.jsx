import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "Feb 5th at 2:30pm",
      remider: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Aug 5th at 8:30am",
      remider: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 9:30pm",
      remider: true,
    },
    {
      id: 4,
      text: "Football Match",
      day: "Feb 5th at 10:30pm",
      remider: false,
    },
  ]);

  return (
    <div className="container">
      <div className="tracker-box">
        <Header title="Task Tracker" />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
