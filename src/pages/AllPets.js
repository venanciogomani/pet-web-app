import React from 'react';
import Container from '../components/Container/Container';
import PetResults from '../components/PetResults/PetResults';

/**
 * Component for displaying all pets.
 * @returns {JSX.Element} - React component | Not gonna lie, I still prefer TSX :P
 */
const AllPets = () => {
  return (
    // Container component to provide styling and layout
    <Container>
      {/* Component for displaying pet results */}
      <PetResults />
    </Container>
  );
};

// Export the AllPets component
export default AllPets;
