import useNavigateTo from "../../../hooks/useNavigateTo";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Button from "../../Button/Button";

const PetCard = ({
    pet
}) => {
    const navigateToPetDetails = useNavigateTo();

    return (
        // Container for the pet card, flex on small screens, grid on medium and above
        <div className="flex md:grid flex-row md:flex-col items-center py-2 px-2">
            {/* Image of the pet with styling */}
            <img 
                src={pet.photoUrl}
                className="bg-gray-100 h-48 rounded-xl w-1/2 md:w-full object-cover object-center"
                alt={pet.name}
            />

            {/* Name of the pet with styling */}
            <div className="text-sm font-semibold w-1/4 md:w-full flex justify-center md:justify-start py-0 md:py-2">
                {pet.name}
            </div>

            {/* Button to view details and a hidden arrow icon for mobile */}
            <div className='text-white w-1/4 md:w-full flex justify-end md:justify-start'>
                {/* Button component to view details */}
                <Button
                    lable="View"
                    action={() => navigateToPetDetails(`pets/${pet.id}`)}
                />

                {/* Arrow icon for mobile view */}
                <span 
                    className="flex md:hidden items-center justify-center w-10 h-10 bg-blue-500 rounded-full cursor-pointer"
                    onClick={() => navigateToPetDetails(`pets/${pet.id}`)}
                >
                    <AiOutlineArrowRight/>
                </span>
            </div>
        </div>
    );
}

export default PetCard;
