import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import RegistrationPage from './pages/RegistrationPage';
import ProtectedRoute from './pages/ProtectedRoute';
import TaskPage from './pages/TaskPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<DashboardPage />} />
            {/* Uncomment if needed */}
            <Route path="/tasks" element={<TaskPage />} />
          </Route>

          {/* Fallback route for 404 */}
          <Route path="*" element={
            <div className="flex items-center justify-center h-screen">
              <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
