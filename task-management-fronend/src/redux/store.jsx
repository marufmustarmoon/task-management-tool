import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Ensure this path is correct
import { thunk } from 'redux-thunk'; // Import thunk as a named import

// Create the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk as middleware
});

// Export the store as default
export default store;
