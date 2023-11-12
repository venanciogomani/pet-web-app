import { useState } from 'react';

/**
 * Custom hook for managing dropdown state.
 * @param {boolean} toggled - Initial state of the dropdown.
 * @returns {Object} - An object containing dropdown state and related functions.
 */
const useDropdown = (toggled) => {
  // State for tracking whether the dropdown is visible.
  const [showDropdown, setShowDropdown] = useState(toggled || false);

  /**
   * Function to toggle the visibility of the dropdown.
   */
  const handleToggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  // Return the dropdown state and toggle function.
  return {
    showDropdown,
    handleToggleDropdown,
  };
};

export default useDropdown;
