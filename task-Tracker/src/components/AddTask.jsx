import React from "react";

const AddTask = () => {
  return (
    <form>
      <div>
        <label>Task</label>
        <input type="text" placeholder="Add Task" />
      </div>
      <div>
        <label>Date & Time</label>
        <input type="text" placeholder="Add Day and Time" />
      </div>
      <div>
        <label>Set Reminder</label>
        <input type="Checkbox" />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
