import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPets } from '../actions/fetchPets';

/**
 * Custom hook for fetching pets data.
 */
const useFetchPets = () => {
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // Effect to dispatch the fetchPets action when the component mounts
  useEffect(() => {
    // Dispatch the fetchPets action
    dispatch(fetchPets());
  }, [dispatch]); // Dependency array to ensure dispatch is the only dependency

  // No need to return anything specific for this hook
};

// Export the useFetchPets custom hook
export default useFetchPets;