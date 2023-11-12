import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/**
 * Custom hook to get details of a single pet based on the route parameter (id).
 * @returns {Object | undefined} - The details of the single pet or undefined if not found.
 */
const useGetSinglePet = () => {
  // Get the id parameter from the route
  const { id } = useParams();

  // Get the pets data from the Redux store
  const data = useSelector(state => state.pets);

  // Find the pet with the matching id
  const pet = data.find(pet => String(pet.id) === String(id));

  // Return the details of the single pet or undefined if not found
  return pet;
};

// Export the useGetSinglePet custom hook
export default useGetSinglePet;
