import { configureStore } from "@reduxjs/toolkit";
import petsReducer from "../reducers/reducer";

// Configure the Redux store with the petsReducer.
const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
});

// Export the configured Redux store.
export default store;
