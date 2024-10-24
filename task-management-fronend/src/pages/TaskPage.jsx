import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, createTask, updateTask, deleteTask } from '../redux/actions/taskActions';

const TaskPage = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCreateTask = () => {
    if (newTask) {
      dispatch(createTask({ name: newTask }));
      setNewTask('');
    }
  };

  const handleUpdateTask = (taskId) => {
    if (editedTask) {
      dispatch(updateTask(taskId, { name: editedTask }));
      setEditingTask(null);
      setEditedTask('');
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Tasks</h2>
      
      {loading && <p>Loading tasks...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleCreateTask}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task._id} className="flex items-center justify-between p-2 border-b">
            {editingTask === task._id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md"
                />
                <button
                  onClick={() => handleUpdateTask(task._id)}
                  className="ml-2 px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditingTask(null)}
                  className="ml-2 px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{task.name}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditingTask(task._id);
                      setEditedTask(task.name);
                    }}
                    className="ml-2 px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task._id)}
                    className="ml-2 px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
