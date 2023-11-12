import React from 'react';
import useSortByDate from '../hooks/useSortByDate';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Container from '../components/Container/Container';
import PetResults from '../components/PetResults/PetResults';
import Search from '../components/Search/Search';

/**
 * Component for filtering and displaying pets.
 * @returns {JSX.Element} - React component | Not gonna lie, I still prefer TSX :P
 */
const PetFilter = () => {
  // Custom hook to manage sorting by date
  const { sortByDate, handleSortByDate } = useSortByDate();

  return (
    // Container component to provide styling and layout
    <Container>
      {/* Search component with sorting functionality */}
      <Search sortByDate={sortByDate} handleSortByDate={handleSortByDate} />
      {/* Component for displaying pet results */}
      <PetResults initialCount={4} sortByDate={sortByDate} />
      {/* Banner component */}
      <Banner />
      {/* Categories component */}
      <Categories />
    </Container>
  );
};

// Export the PetFilter component
export default PetFilter;
