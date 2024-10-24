const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_TASKS_REQUEST':
        return { ...state, loading: true };
        
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, loading: false, tasks: action.payload };
        
      case 'FETCH_TASKS_FAILURE':
        return { ...state, loading: false, error: action.payload };
        
      case 'CREATE_TASK_SUCCESS':
        return { ...state, tasks: [...state.tasks, action.payload] }; // Add created task
        
      case 'CREATE_TASK_FAILURE':
        return { ...state, error: action.payload };
  
      case 'UPDATE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.map(task => 
            task.id === action.payload.id ? { ...task, ...action.payload } : task
          ), // Update the specific task
        };
  
      case 'UPDATE_TASK_FAILURE':
        return { ...state, error: action.payload };
  
      case 'DELETE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id), // Remove the deleted task
        };
  
      case 'DELETE_TASK_FAILURE':
        return { ...state, error: action.payload };
  
      default:
        return state;
    }
  }
  