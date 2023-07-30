const Task = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
