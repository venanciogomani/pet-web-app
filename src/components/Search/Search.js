import useGetPaginatedPets from "../../hooks/useGetPaginatedPets";
import useSearch from "../../hooks/useSearch";
import useNavigateTo from "../../hooks/useNavigateTo";
import useDropdown from "../../hooks/useDropdown";
import { BiSearch } from "react-icons/bi";
import Filter from "../Filter/Filter";

import { boldenMatchingText } from "../../helpers";

const Search = ({
    sortByDate,
    handleSortByDate
}) => {
    // Custom hooks for managing pets, search functionality, navigation, and dropdowns
    const { pets, petUniqueSpecies } = useGetPaginatedPets();
    const { searchTerm, searchResults, showSearchResults, handleSearch, handleSearchSubmit } = useSearch(pets);
    
    const navigateTo = useNavigateTo();
    
    const typeFilterDropdown = useDropdown();
    const categoryFilterDropdown = useDropdown();

    return (
        <div className="mx-5 md:mx-0 pt-4">
            <h1 className="text-2xl font-bold">
                Pets
            </h1>
            {/* Search input and results */}
            <div
                className={
                    `w-full md:w-1/2 bg-gray-100 md:bg-white border px-4 mt-4 flex flex-col relative
                    ${showSearchResults ? 'border-default-blue-dark rounded-xl border-2' : 'border-gray-300 rounded-full border'}`
                }
            >
                <form onSubmit={handleSearchSubmit} className="flex flex-row items-center py-3">
                    <BiSearch
                        className="text-default-blue-dark text-xl me-2 cursor-pointer"
                        onClick={searchTerm.length > 0 ? handleSearchSubmit : null}
                    />
                    <input 
                        type="text" 
                        placeholder="Search for pets" 
                        className="w-full bg-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e?.target?.value)}
                    />
                </form>
                {showSearchResults && (
                    <ul className="left-0 w-full bg-white border-t flex-col">
                        {/* Display search results */}
                        {searchResults.map(pet => (
                            <li key={pet.item} className="py-2">
                                <span 
                                    className="text-default-blue-dark hover:text-default-blue-dark cursor-pointer"
                                    onClick={() => navigateTo(pet.item)}
                                >
                                    {boldenMatchingText(pet.item, searchTerm)}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Filters for Type, Category, and Last added */}
            <div className="flex flex-wrap gap-2 mt-4">
                <Filter 
                    name="Type" 
                    options={petUniqueSpecies} 
                    action={typeFilterDropdown.handleToggleDropdown}
                    toggled={typeFilterDropdown.showDropdown}
                />
                <Filter 
                    name="Category" 
                    options={["All pets", "Location specific", "Age specific", "Available now", "For small or big homes"]}
                    action={categoryFilterDropdown.handleToggleDropdown} 
                    toggled={categoryFilterDropdown.showDropdown}
                />
                <Filter 
                    name="Last added" 
                    action={handleSortByDate} 
                    toggled={sortByDate}
                />
            </div>
        </div>
    );
}

export default Search;
