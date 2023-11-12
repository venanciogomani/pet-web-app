import { slugify } from "../../helpers";
import useNavigateTo from "../../hooks/useNavigateTo";

const Dropdown = ({
    options
}) => {
    const navigateTo = useNavigateTo();

    return (
        // Absolute positioning for the dropdown
        <div className="absolute top-8 left-0 w-full bg-white rounded-xl border-2 border-default-blue-dark">
            {/* List of options in the dropdown */}
            <ul className="flex flex-col">
                {options && options.map(option => (
                    // Each option in the dropdown
                    <li 
                        key={option} 
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer first:rounded-t-xl last:rounded-b-xl text-sm"
                        // Navigate to the slugified version of the option on click
                        onClick={() => navigateTo(slugify(option))}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dropdown;
