import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add a Task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="addTask-form" onSubmit={onSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          name="taskName"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Date & Time</label>
        <input
          type="text"
          name="date&time"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="checkbox-sec">
        <label>Set Reminder</label>
        <input
          type="Checkbox"
          checked={reminder}
          name="reminderCheck"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn submit-btn" />
    </form>
  );
};

export default AddTask;
