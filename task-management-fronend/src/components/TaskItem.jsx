
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
      <p className="text-gray-600">{task.description}</p>
      <p className="text-sm text-gray-500">Status: {task.status}</p>

      <div className="mt-4">
        <Link
          to={`/tasks/update/${task.id}`}
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700"
        >
          Edit Task
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
