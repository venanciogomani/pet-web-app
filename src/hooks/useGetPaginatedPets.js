import { useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { parseCustomDate } from '../helpers';

/**
 * Custom hook for handling paginated pet data.
 * @param {number} initialCount - Initial number of pets to display.
 * @param {boolean} sortByDate - Flag to determine whether to sort pets by date.
 * @returns {Object} - An object containing paginated pet data and related functions.
 */
const usePaginatedPets = (initialCount = 8, sortByDate) => {
  // State for tracking the number of displayed results.
  const [resultsCount, setResultsCount] = useState(initialCount);

  // Get the 'species' parameter from the URL using React Router.
  const { species } = useParams();

  // Get all pets from the Redux store.
  const allPets = useSelector((state) => state.pets);

  // Memoized array of filtered pets based on the 'species' parameter.
  const filteredPets = useMemo(() => {
    if (species) {
      return allPets.filter((pet) => pet.species.toLowerCase() === species.toLowerCase());
    }

    return allPets;
  }, [allPets, species]);

  // Memoized array of sorted pets based on the 'sortByDate' flag.
  const sortedPets = useMemo(() => {
    if (sortByDate) {
      // Create a new array to avoid mutating the original.
      return [...filteredPets].sort((a, b) => parseCustomDate(b.dateAdded) - parseCustomDate(a.dateAdded));
    }

    return filteredPets;
  }, [filteredPets, sortByDate]);

  // Array of pets that are both sorted and available.
  const pets = sortedPets.filter((pet) => pet.available);

  // Array of unique pet species for filtering options.
  const petUniqueSpecies = [...new Set(pets.map((pet) => pet.species))];

  // Function to handle loading more pets.
  const handleLoadMore = useCallback(() => {
    setResultsCount((prevCount) => {
      if (prevCount >= pets.length) {
        return prevCount;
      }

      if (prevCount + initialCount >= pets.length) {
        return pets.length;
      }

      return prevCount + initialCount;
    });
  }, [pets, initialCount]);

  // Return the relevant data and functions.
  return { pets, petUniqueSpecies, handleLoadMore, resultsCount };
};

export default usePaginatedPets;
