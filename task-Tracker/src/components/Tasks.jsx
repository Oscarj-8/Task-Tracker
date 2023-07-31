import Task from "./Task";

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="tasks-order">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Tasks;
