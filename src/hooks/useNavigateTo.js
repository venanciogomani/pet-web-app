import { useNavigate } from "react-router-dom";

/**
 * Custom hook to get the navigate function and simplify navigation.
 * @returns {function} - Function to navigate to a specified URL.
 */
const useNavigateTo = () => {
  // Get the navigate function from the react-router-dom library
  const navigate = useNavigate();

  /**
   * Function to navigate to a specified URL.
   * @param {...string} args - Parts of the URL to be joined.
   */
  const navigateTo = (...args) => {
    // Join the parts of the URL and convert to lowercase
    const url = args.length > 0 
      ? args.map(arg => `/${arg.toLowerCase()}`).join('') 
      : '/';

    // Use the navigate function to navigate to the constructed URL
    navigate(url);
  };

  // Return the navigateTo function for external use
  return navigateTo;
}

// Export the useNavigateTo custom hook
export default useNavigateTo;
