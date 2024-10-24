import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions/taskActions';
import TaskList from '../components/TaskList';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { tasks, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Tasks</h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading tasks...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : tasks.length === 0 ? (
          <p className="text-center text-gray-600">No tasks available.</p>
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
