import { useState } from "react";
import useNavigateTo from "./useNavigateTo";
import Fuse from "fuse.js";
import { slugify } from "../helpers";
import { extractUniqueValues } from "../helpers";

/**
 * Custom hook for handling search functionality.
 * @param {Array} data - The data to search through.
 * @returns {Object} - Search-related state and functions.
 */
const useSearch = (data) => {
  // State to manage search term
  const [searchTerm, setSearchTerm] = useState('');
  // State to store search results
  const [searchResults, setSearchResults] = useState([]);
  // State to control visibility of search results
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Custom hook to simplify navigation
  const navigateTo = useNavigateTo();

  // Fuse.js configuration options for searching
  const fuseOptions = {
    keys: ['species']
  };

  // Extract unique species values from the data
  const uniqueSpecies = extractUniqueValues(data, 'species');
  // Create a Fuse instance for searching species
  const fuse = new Fuse(uniqueSpecies, fuseOptions);

  /**
   * Handler for updating search results based on input value.
   * @param {string} value - The search input value.
   */
  const handleSearch = (value) => {
    // Update the search term state
    setSearchTerm(value);
    // Perform search using Fuse.js and update search results
    const results = value.length > 0 && fuse.search(value).slice(0, 4);
    setSearchResults(results);
    // Show or hide search results based on the number of results
    setShowSearchResults(results.length > 0);
  };

  /**
   * Handler for submitting the search form.
   * @param {Event} e - The form submit event.
   */
  const handleSearchSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    // Navigate to the URL based on the slugified search term
    navigateTo(slugify(searchTerm));
  };

  // Return search-related state and functions for external use
  return {
    searchTerm,
    searchResults,
    showSearchResults,
    handleSearch,
    handleSearchSubmit
  };
}

// Export the useSearch custom hook
export default useSearch;
