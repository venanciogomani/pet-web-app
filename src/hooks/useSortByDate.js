import { useReducer } from "react";

// Reducer function to manage the state of sortByDate
const sortByDateReducer = (state, action) => {
  switch (action.type) {
    // Toggle the sortByDate state when the action type is 'TOGGLE_SORT_BY_DATE'
    case 'TOGGLE_SORT_BY_DATE':
      return !state;
    // Return the current state for unknown action types
    default:
      return state;
  }
}

/**
 * Custom hook for managing the sortByDate state.
 * @returns {Object} - sortByDate state and function to toggle it.
 */
const useSortByDate = () => {
  // useReducer to manage the sortByDate state with the sortByDateReducer
  const [sortByDate, dispatch] = useReducer(sortByDateReducer, false);

  /**
   * Function to handle toggling the sortByDate state.
   */
  const handleSortByDate = () => {
    // Dispatch an action to toggle the sortByDate state
    dispatch({ type: 'TOGGLE_SORT_BY_DATE' });
  }
  
  // Return sortByDate state and handleSortByDate function for external use
  return {
    sortByDate,
    handleSortByDate
  }
}

// Export the useSortByDate custom hook
export default useSortByDate;
