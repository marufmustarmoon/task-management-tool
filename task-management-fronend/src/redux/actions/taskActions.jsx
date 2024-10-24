import axios from 'axios';

// Action to fetch tasks
export const fetchTasks = () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'FETCH_TASKS_REQUEST' });

    const {
      user: { user },
    } = getState();

    const { data } = await axios.get('/api/tasks', {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
  }
};

// Action to create a new task
export const createTask = (taskData) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();

    const { data } = await axios.post('/api/tasks', taskData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    dispatch({ type: 'CREATE_TASK_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CREATE_TASK_FAILURE', payload: error.message });
  }
};

// Action to delete a task
export const deleteTask = (taskId) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();

    await axios.delete(`/api/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    dispatch({ type: 'DELETE_TASK_SUCCESS', payload: taskId });
  } catch (error) {
    dispatch({ type: 'DELETE_TASK_FAILURE', payload: error.message });
  }
};


export const updateTask = (taskId, taskData) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();

    const { data } = await axios.put(`/api/tasks/${taskId}`, taskData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'UPDATE_TASK_FAILURE', payload: error.message });
  }
};
