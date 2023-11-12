import useNavigateTo from "../../../hooks/useNavigateTo";
import { slugify } from "../../../helpers";

const CategoryCard = ({
    icon,
    title
}) => {
    const navigateTo = useNavigateTo();

    return (
        // Container for the category card
        <div className="pe-4 max-w-sm">
            {/* Placeholder for the category card's visual representation */}
            <div className="bg-gray-100 w-full h-[100px] rounded-xl"></div>

            {/* Clickable area with a hover effect to navigate to the category */}
            <div 
                onClick={() => navigateTo(slugify(title))}
                className="my-2 cursor-pointer text-sm font-semibold text-default-grey-dark hover:text-default-blue-light duration-150 ease-in-out"
            >
                {title}
            </div>
        </div>
    );
}

export default CategoryCard;
