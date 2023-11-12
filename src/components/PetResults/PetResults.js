import useGetPaginatedPets from "../../hooks/useGetPaginatedPets";

import PetCard from "../Cards/PetCard/PetCard";
import Button from "../Button/Button";

const PetResults = ({
    initialCount,
    sortByDate
}) => {
    // Get paginated pets using the custom hook
    const { pets, handleLoadMore, resultsCount } = useGetPaginatedPets(initialCount, sortByDate);

    return (
        <div className="py-5 mx-5 md:mx-0">
            <h1 className="text-lg font-bold">
                Results
            </h1>
            {pets.length > 0 ? (
                // Display pet cards if there are pets
                <div className="flex flex-col w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-1">
                        {/* Map through pets and display PetCard component */}
                        {pets.map(pet => (
                            <PetCard key={pet.id} pet={pet} />
                        )).slice(0, resultsCount)}
                    </div>
                    {/* Display "Load more" button if there are more pets to load */}
                    {(resultsCount > 4 && resultsCount < pets.length) && (
                        <div className="flex flex-row items-center justify-center pt-4">
                            <Button
                                lable="Load more"
                                action={handleLoadMore}
                                show={resultsCount < pets.length}
                            />
                        </div>
                    )}
                </div>
            ) : (
                // Display message when no pets are found
                <div className="flex flex-col w-full">
                    <div className="flex flex-col justify-center w-full h-full">
                        <div className="text-lg text-neutral-700">
                            No pets found
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PetResults;
