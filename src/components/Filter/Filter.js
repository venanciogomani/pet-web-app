import Dropdown from "../Dropdown/Dropdown";
import { BiChevronDown } from "react-icons/bi";

const Filter = ({
    name,
    options,
    action,
    toggled
}) => {
    return (
        // Container for the filter component
        <div className="relative">
            {/* Filter button */}
            <div
                // Trigger the action on click
                onClick={action && action}
                // Dynamically set styles based on toggled state
                className={`
                    text-sm px-3 py-1 rounded-full cursor-pointer
                    ${toggled ? 'border-default-blue-dark text-default-blue-dark border-2' : 'border-default-grey-dark text-default-grey-dark border'}
                `}
            >
                {/* Display filter name and chevron icon if options exist */}
                {name} {options && options.length > 0 && (
                    <BiChevronDown className="inline-block" />
                )}
            </div>
            {/* Dropdown for filter options */}
            {(options && options.length > 0 && toggled) && (
                <Dropdown options={options} />
            )}
        </div>
    );
}

export default Filter;
