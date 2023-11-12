import React from 'react';
import useGetSinglePet from '../hooks/useGetSinglePet';
import Container from '../components/Container/Container';
import PetAttribute from '../components/PetAttribute/PetAttribute';
import { formatDate, calculateAgeFromBirthYear } from '../helpers';

/**
 * Component for displaying details of a single pet.
 * @returns {JSX.Element} - React component | Not gonna lie, I still prefer TSX :P
 */
const PetDetails = () => {
  // Custom hook to get details of a single pet
  const pet = useGetSinglePet();

  return (
    // Container component to provide styling and layout
    <Container>
      {pet ? (
        <>
          {/* Display pet details */}
          <h1 className="pt-4 flex md:hidden px-4 text-2xl font-bold">{pet.name}</h1>
          <div className="flex flex-col md:flex-row w-full py-6">
            {/* Pet photo */}
            <img
              src={pet.photoUrl}
              className="w-full md:w-1/2 h-[400px] bg-gray-100 rounded-xl object-cover"
              alt={pet.name}
            />
            <div className="w-full md:w-1/2 flex flex-col pt-4 md:pt-0">
              {/* Pet name (visible on larger screens) */}
              <h1 className="hidden md:flex px-4 text-2xl font-bold">{pet.name}</h1>
              <div className="w-full md:w-1/2 px-4 grid grid-cols-2">
                {/* Display pet attributes */}
                <PetAttribute title="Type" value={pet.species} />
                <PetAttribute title="Date added" value={formatDate(pet.dateAdded)} />
                <PetAttribute title="Age" value={calculateAgeFromBirthYear(pet.birthYear)} />
                <PetAttribute title="Category" value="Small pet" />
              </div>
            </div>
          </div>
        </>
      ) : (
        // Display message if pet is not found
        <h1 className="pt-4 flex px-4 text-2xl font-bold">Pet not found</h1>
      )}
    </Container>
  );
};

// Export the PetDetails component
export default PetDetails;
